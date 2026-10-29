import sys
import os
from pathlib import Path
from PIL import Image

def process_foto4():
    input_path = Path("images/foto 4.jfif")
    output_path = Path("images/foto-4-cutout.png")
    
    if not input_path.exists():
        print(f"Error: {input_path} not found")
        sys.exit(1)
        
    print(f"Reading {input_path}...")
    img = Image.open(input_path)
    
    try:
        from rembg import remove, new_session
        print("Removing background with rembg (u2netp model, ~4MB)...")
        session = new_session("u2netp")
        output = remove(img, session=session)
        output.save(output_path, "PNG")
        print(f"Saved transparent cutout to {output_path} successfully!")
    except Exception as e:
        print(f"Error during background removal: {e}")
        sys.exit(1)

if __name__ == "__main__":
    process_foto4()
