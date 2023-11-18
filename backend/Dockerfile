
# Set the base image
FROM python:3.10.9

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the source code
COPY . /app

# Set the main file
ENV FLASK_APP=api.py

# Expose the port
EXPOSE 8080

# Run the application
CMD ["flask", "--app", "api", "run", "--port", "8080", "--host=0.0.0.0"]
