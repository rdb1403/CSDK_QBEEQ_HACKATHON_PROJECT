# CSDK_QBEEQ_HACKATHON_PROJECT
A Dashoboard Builder with snowflake writeback functionality

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Setup](#setup)
  - [Visualisation](#visualisation)
- [Data Sources](#data-sources)
  - [Sample Ecommerce](#sample-ecommerce)
  - [Healthcare](#healthcare)
  - [Sample Snowflake](#sample-snowflake)
- [Writeback Functionality](#writeback-functionality)
  - [Writeback Form](#writeback-form)
  - [Writeback Table](#writeback-table)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

Detailed instructions on how to install, set up, and get your project running.

\`\`\`bash
# Clone the repository
git clone https://github.com/rdb1403/CSDK_QBEEQ_HACKATHON_PROJECT

# Navigate to the project directory
cd your-project-name

# Install dependencies
npm install

# Start the localhost server
npm run dev
FOR Backend server : nodemon server.js (please fill the details of your snowflake account)
\`\`\`

This will run the server on [http://localhost:5173/](http://localhost:5173/).

## Usage

### Setup

- Navigate to the **Setup** tab to create the widgets.
- Select the required fields:
  - **Datasource**: Choose from Sample Ecommerce, Healthcare, or Sample Snowflake.
  - Depending on the selected datasource, you can select dimensions, measures, and breakby. These fields will change dynamically based on the datasource.

### Visualisation

- Navigate to the **Visualisation** tab to view the created visuals.

## Data Sources

### Sample Ecommerce & Healthcare

- When selecting either Sample Ecommerce or Healthcare, you can select dimensions, measures, and breakby.
- The options for dimensions, measures, and breakby will dynamically update based on the selected datasource.

### Sample Snowflake

- When selecting Sample Snowflake, you have two options:
  1. **Writeback Table**
  2. **Writeback Form**

## Writeback Functionality

### Writeback Form

- Creates a visual form where you can fill in entries.
- Entries are sent to the backend and inserted into the Snowflake table.
- Ensure the backend node server is running before clicking the “Push to Snowflake” button.
- A toaster notification will confirm data insertion with the message "Data inserted successfully."
- For live models, queries are cached, so rearrange the dimensions array to reflect new instances in the table.

### Writeback Table

- Creates a visual table of Snowflake entries.
- View and edit entries directly in the table.
- Clicking the edit icon will open a popup window with the data of the selected row.
- After making updates, ensure the backend server is running and click the “Push to Snowflake” button.
- A toaster notification will confirm data updates with the message "Data updated successfully."
-For live models, queries are cached, so rearrange the dimensions array to reflect new instances in the table.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/fooBar`).
3. Commit your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md]

## Contact

Your Name - [rushikesh@64sqs.com]

Project Link: [https://github.com/rdb1403/CSDK_QBEEQ_HACKATHON_PROJECT]
"""

