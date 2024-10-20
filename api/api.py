from flask import Flask, request, jsonify
import script
import json
# Initialize Flask app
app = Flask(__name__)

# Route that calls your function based on request data
@app.route('/analyze', methods=['POST'])
def analyze_location():
    # Get JSON data from the request
    data = request.get_json()

    # Extract x and y from the request (e.g., longitude and latitude)
    x = data.get('x')
    y = data.get('y')

    if x is None or y is None:
        return jsonify({'error': 'x and y values are required!'}), 400

    # Call the custom function to process the (x, y) inputs
    result = script.find_nearest_datapoint(x, y,script.df)

    if isinstance(result, str):
        try:
            # Try to parse it as JSON
            result = json.loads(result)
        except ValueError:
            return jsonify({'error': 'Failed to parse result as JSON.'}), 500
    # Return the result as a JSON response
    return jsonify(result)

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
