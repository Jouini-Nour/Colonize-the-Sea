# %%
import pandas as pd
import json

df = pd.read_csv('final_data.csv')

def find_nearest_datapoint(x, y, df):
  """
  Finds the datapoint in the DataFrame that is closest to the given (x, y) coordinates.

  Args:
    x: The x-coordinate.
    y: The y-coordinate.
    df: The pandas DataFrame containing the data.

  Returns:
    A JSON string representing the nearest datapoint, or None if the DataFrame is empty.
  """
  if df.empty:
    return None

  df['distance'] = ((df['u'] - x)**2 + (df['v'] - y)**2)**0.5
  nearest_row = df.loc[df['distance'].idxmin()]
  return nearest_row.to_json()


# Example usage:
x_input = 100  # Replace with your input x value
y_input = 200  # Replace with your input y value

nearest_datapoint_json = find_nearest_datapoint(x_input, y_input, df)

if nearest_datapoint_json is not None:
  print("Nearest datapoint (JSON):")
  print(nearest_datapoint_json)
else:
  print("DataFrame is empty.")


# To save the JSON to a file, uncomment the following line:
# with open('nearest_datapoint.json', 'w') as f:
#     json.dump(json.loads(nearest_datapoint_json), f)



