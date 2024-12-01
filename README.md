# NIRMAN Project Documentation

## Repository Structure
This project consists of two separate repositories:
1. **Nirmaan-show**: Main showcase repository
2. **NIRMAN-SUBMission-of-NST-ADYPU**: Submission repository

## Technology Stack
- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - Bootstrap for responsive design
- **Version Control**: Git
- **Hosting**: GitHub Pages

## Project Setup

### Prerequisites
- Git installed on your system
- Modern web browser (Chrome, Firefox, Safari)
- Text editor (VS Code recommended)

### Local Development Setup
# Clone the repositories
```bash
git clone https://github.com/your-username/Nirmaan-show.git
git clone https://github.com/nst-sdc/NIRMAN-SUBMission-of-NST-ADYPU.git
```

## Working with JSON Files

### JSON File Structure
```json
{
    "teamName": "Example Team",
    "members": [
        {
            "name": "Member 1",
            "role": "Developer"
        }
    ],
    "projectDetails": {
        "title": "Project Name",
        "description": "Project Description"
    }
}
```

### JSON Modification Guidelines
1. Always validate JSON syntax using tools like [JSONLint](https://jsonlint.com/)
2. Keep backup before making changes
3. Use proper indentation (2 or 4 spaces)
4. Maintain consistent naming conventions
5. Add comments in separate documentation

## Handling 404 Errors

### Common Causes
1. Incorrect file paths in HTML/CSS/JS files
2. Case sensitivity issues in filenames
3. Missing files or resources
4. Incorrect repository configuration

### Prevention and Fixes
1. **Check File Paths**:
   - Use relative paths correctly
   - Verify file existence
   - Maintain consistent casing

2. **GitHub Pages Configuration**:
   ```yaml
   # In .github/workflows/pages.yml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   ```

3. **Custom 404 Page**:
   Create a `404.html` in root directory:
   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Page Not Found</title>
     </head>
     <body>
       <h1>404 - Page Not Found</h1>
       <a href="/">Return to Home</a>
     </body>
   </html>
   ```

## Pull Request Process

### Creating a Pull Request
```bash
# Create new branch
git checkout -b fix/team-name-404

# Make your changes
# Stage changes
git add .

# Commit with descriptive message
git commit -m "Fix: Team folder 404 error and path corrections"

# Push to your fork
git push origin fix/team-name-404

# Create PR on GitHub
# Go to repository → Pull requests → New pull request
```

### PR Guidelines
1. Provide clear description of changes
2. Reference related issues
3. Include testing steps
4. Add screenshots if UI changes
5. Request review from maintainers

## Live Preview Testing
1. Enable GitHub Pages in repository settings
2. Wait for deployment (check Actions tab)
3. Test all navigation links
4. Verify team folder access
5. Check media loading
6. Test on multiple browsers

## Common Issues and Solutions

### 404 Errors
- Verify file exists in correct location
- Check case sensitivity
- Ensure proper GitHub Pages configuration
- Validate all internal links

### JSON Issues
- Use JSON validator
- Check for missing commas
- Verify UTF-8 encoding
- Backup before editing

## Maintenance

### Regular Checks
1. Validate all links monthly
2. Update documentation as needed
3. Review and merge PRs promptly
4. Monitor GitHub Actions status

### Best Practices
1. Keep consistent coding style
2. Document all major changes
3. Regular backups
4. Version control all changes

## Support
For issues or questions:
1. Open GitHub issue
2. Tag relevant maintainers
3. Provide detailed problem description
4. Include error messages/screenshots
