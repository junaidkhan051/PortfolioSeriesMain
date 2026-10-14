import os
import sys
from PIL import Image

def remove_background():
    input_path = 'pic1.jpeg'
    output_path = 'pic.png'
    
    print(f"Processing {input_path}...")
    
    try:
        from rembg import remove
        with open(input_path, 'rb') as i:
            input_data = i.read()
            output_data = remove(input_data)
            with open(output_path, 'wb') as o:
                o.write(output_data)
        print("Background removed successfully with rembg!")
    except Exception as e:
        print("rembg error or not ready:", e)
        # Advanced fallback color-segmentation thresholding if rembg fails
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Detect dark grey / COMSATS logo background pixels
            r, g, b, a = item
            # Background in the uploaded image is dark grey/black (r, g, b < 65 and low color saturation)
            if r < 55 and g < 55 and b < 60 and abs(r - g) < 15 and abs(g - b) < 15:
                newData.append((0, 0, 0, 0))  # transparent
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Fallback background removal completed!")

if __name__ == '__main__':
    remove_background()
