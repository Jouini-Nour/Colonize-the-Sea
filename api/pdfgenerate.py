import json
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch

def create_pdf(json_response, output_file, images=[]):
    # Parse the JSON response
    data = json.loads(json_response)
    
    # Create a PDF canvas
    c = canvas.Canvas(output_file, pagesize=letter)
    width, height = letter
    
    # Add title
    c.setFont("Helvetica-Bold", 16)
    c.drawString(1 * inch, height - 1 * inch, "Location Analysis Report")
    
    # Add a line break
    c.setFont("Helvetica", 12)
    c.drawString(1 * inch, height - 1.5 * inch, f"Location Coordinates: (x: {data['x']}, y: {data['y']})")
    
    # Add details from JSON
    c.drawString(1 * inch, height - 2 * inch, f"Eastward Current Velocity (u): {data['u']} m/s")
    c.drawString(1 * inch, height - 2.5 * inch, f"Northward Current Velocity (v): {data['v']} m/s")
    c.drawString(1 * inch, height - 3 * inch, f"Depth until Sea Floor: {data['depth']} meters")
    
    # Add any additional comments or results
    c.drawString(1 * inch, height - 3.5 * inch, f"Comment: {data['comment']}")
    
    # Insert images at the end
    if images:
        y_position = height - 4 * inch  # Set the initial y position for images
        for img in images:
            c.drawImage(img, 1 * inch, y_position, width=4 * inch, height=3 * inch)  # Adjust dimensions as needed
            y_position -= 3 * inch  # Move down for the next image
    
    # Save the PDF
    c.save()

# Example usage
json_response = '''{
    "x": -29.9363568433,
    "y": 27.6007371046,
    "distance_from_land": 2,
    "depth": 115.1428571429,
    "u": -27.0,
    "v": 21.2857142857,
    "result": 0,
    "distance": 1.0063349496,
    "comment": "We can have a city of 10k person and 5km radius"
}'''

create_pdf(json_response, "location_analysis_report.pdf" )
