#!/bin/bash

# Create a temporary directory for processing
mkdir -p temp_processing

# Function to convert team name to URL-friendly format
convert_to_url() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-'
}

# Process each zip file from participants website directory
for zip_file in "participants website"/*.zip; do
    if [ -f "$zip_file" ]; then
        # Get team name from zip file (remove .zip extension and path)
        team_name=$(basename "${zip_file%.zip}")
        
        # Convert team name to URL-friendly format
        url_name=$(convert_to_url "$team_name")
        
        echo "Processing $team_name..."
        
        # Create team directory in nst-sdc.github.io
        mkdir -p "../nst-sdc.github.io/$url_name"
        
        # Extract zip to temporary directory
        unzip -q "$zip_file" -d "temp_processing/$url_name"
        
        # Move contents to the team directory
        # If there's only one directory inside, move its contents
        if [ "$(ls -A "temp_processing/$url_name" | wc -l)" -eq 1 ]; then
            mv "temp_processing/$url_name"/*/* "../nst-sdc.github.io/$url_name/"
        else
            mv "temp_processing/$url_name"/* "../nst-sdc.github.io/$url_name/"
        fi
        
        # Clean up temporary directory
        rm -rf "temp_processing/$url_name"
        
        echo "✓ Processed $team_name -> $url_name"
    fi
done

# Clean up
rm -rf temp_processing

echo "All websites have been processed!" 