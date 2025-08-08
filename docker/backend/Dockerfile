FROM python:3.9-slim

WORKDIR /app

# Copy requirements file and install dependencies (including gunicorn)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app source code
COPY . .

# Expose the port your app will run on
EXPOSE 4000

# Run the app with gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:4000", "app:app"]
