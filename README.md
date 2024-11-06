# 🟥 Fully-Functional-Job-Portal-System-FrontEnd 🟥
      ⏩DEA-II GROUP PROJECT GROUP_06⏪ 

<p align="center">         
<img src="https://github.com/SE-LAPS/Fully-functional-Job-Portal-System/assets/87580847/d3b3f063-ca16-4816-ae83-3ddd39391e35" />
</p>

![Screenshot 2024-06-29 094812](https://github.com/SE-LAPS/Fully-functional-Job-Portal-System/assets/87580847/23eaa99d-23c9-4486-9c72-54986a48efd2)

# 🟨 FrontEnd Project Structure 🟨

<p align="center">
<img src="https://github.com/user-attachments/assets/cf3fa22b-93ab-4a80-adf0-5e241445cd39" />
</p>

## App.js ▶
![app js](https://github.com/user-attachments/assets/ffbdec28-1b1e-495e-bec4-3cd70528b678)

## Dashboard.js ▶
![dashboard js](https://github.com/user-attachments/assets/bae90292-dcbe-4598-b47c-ca7f1ded4a93)

## Job Detailes.js ▶
![job detailes js](https://github.com/user-attachments/assets/0815dac4-63ad-45f1-a062-5b1073514884)

## Apply Jobs.js ▶
![apply jobs js](https://github.com/user-attachments/assets/54555c3e-2b7a-4510-9c87-507119e73aa2)

## Apply Job History.js ▶
![apply job history js](https://github.com/user-attachments/assets/428be8ca-bdd2-4eaf-817e-199947a26274)

## Job Listing.js ▶
![job listing js](https://github.com/user-attachments/assets/ce9e998c-56f6-4f79-a76c-035864690b28)

## Post Job Form.js ▶
![post job form js](https://github.com/user-attachments/assets/f8140ebe-5355-442f-aeb7-9ae13634b010)

## Metrics.js ▶
![metrics js](https://github.com/user-attachments/assets/3e70bfa2-5e55-4b24-8a1b-04ba03959339)

## Api.js
![api js](https://github.com/user-attachments/assets/4606bec2-e983-4227-b284-3a04ffda9311)

# 🟪 FrontEnd Project Results 🟪

## Home ▶
![JOB HUNTER_](https://github.com/user-attachments/assets/416215fb-6dc8-41fe-bf76-fd5263cc4394)

## About Us ▶
![Screenshot 2024-09-05 093937](https://github.com/user-attachments/assets/9ae1d1ed-ae79-4b7c-ad53-92582fa89899)

## Find Jobs ▶
![Screenshot 2024-09-05 094037](https://github.com/user-attachments/assets/29f1d8f6-0081-4b29-978e-a2d762ce2906)

## Job Alerts ▶
![Screenshot 2024-09-05 094052](https://github.com/user-attachments/assets/5bab35cb-9b48-42af-99a3-4bd7f2635349)

## Employeers ▶
![Screenshot 2024-09-05 094116](https://github.com/user-attachments/assets/c3b64e16-36b6-4872-9698-071ce939e9f7)

## Contact Us ▶
![Screenshot 2024-09-05 094130](https://github.com/user-attachments/assets/f6a3b40c-9e6a-4ace-87f3-5181853a1971)

## Dashboard ▶
![Screenshot 2024-09-05 094411](https://github.com/user-attachments/assets/dd18bf5f-4681-4224-b826-2378a19a2ea6)

## Recent Job Post ▶
![Screenshot 2024-09-05 094426](https://github.com/user-attachments/assets/08bb2572-e45f-4e11-bbd8-e48532d5b343)

## Top Categories ▶
![Screenshot 2024-09-05 094447](https://github.com/user-attachments/assets/38e485bd-5647-44b7-a58d-55ca4a546f92)


# 🟫 Job Portal Application Setup Guide 🟫

This guide will help you set up and run a Spring Boot backend application, a React.js frontend application, and use MySQL Workbench as the database management tool.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **MySQL**: Download from [MySQL website](https://dev.mysql.com/downloads/).
- **MySQL Workbench**: Included with MySQL installation.
- **Node.js** (includes npm): Download from [Node.js website](https://nodejs.org/en).
- **Java Development Kit (JDK)**: Ensure Java 8 or higher is installed.
- **Maven**: Included with most IDEs or can be installed separately.

## 1. Set Up MySQL Database

### Install MySQL

1. Download and install MySQL from the official [MySQL website](https://dev.mysql.com/downloads/).
2. Follow the installation wizard to complete the setup.

### Configure MySQL Workbench

1. **Open MySQL Workbench**.
2. **Create a new connection**:
    - Click on the `+` icon next to "MySQL Connections".
    - Fill in the connection details (e.g., host, port, username, password).
    - Test the connection and save it.
3. **Create a new schema**:
    - Click on your newly created connection.
    - Go to the "Schemas" tab and right-click to create a new schema.
    - Name it `Job_Portal`.

## 2. Set Up and Run the Spring Boot Backend

### Clone the Spring Boot Project

1. Clone the repository: ```https://github.com/SE-LAPS/Fully-Functional-Job-Portal-System-BackEnd.git```
2. Run the Spring Boot Application
      You can run the Spring Boot application in two ways:<br>
         Via IDE<br>
            - Open the Spring Boot project in your preferred IDE (e.g., IntelliJ IDEA, Eclipse).<br>
            - Right-click the main application class (annotated with @SpringBootApplication).<br>
            - Select Run.<br>
         Via Command Line<br>
            - Open a terminal.<br>
            - Navigate to the root directory of your Spring Boot project: ```./mvnw spring-boot:run```
3.The backend should now be running, typically on: ```http://localhost:8080``` 

## 3. Set Up and Run the React.js Frontend

1. Download and install Node.js from the official Node.js website:```https://nodejs.org/en```
2. Install Project Dependencies
3. Open a terminal.
4. Navigate to the root directory of your React project: ```npm install```
5. Run the React.js Application: ```npm start```
6. By default, the React frontend will be running on:``` http://localhost:3000.```

## 4. Connect Frontend to Backend

1. Spring Boot backend is running on:```http://localhost:8080```
2. Check CORS Configuration:```@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("http://localhost:3000");
    }
}```

## 5. Verify Everything is Running

1. Check Backend:```http://localhost:8080/api/endpoint```
2. Check Frontend:``` http://localhost:3000```
3. Troubleshooting:<br>
         - MySQL Connection Issues: Ensure that MySQL server is running and that you've configured the correct username and password in your Spring Boot application.properties or application.yml.<br>
         - CORS Issues: Double-check your CORS configuration in the Spring Boot application.<br>
         - Frontend Errors: Open the browser console (F12) to view any frontend errors and address them accordingly.

# 🟩 Team Members 🟩

👨‍🎓**Lahiru Senavirathna** ([SE-LAPS](https://github.com/SE-LAPS))
 
👨‍🎓**Thevindu Ransara** ([trsrathnayaka](https://github.com/trsrathnayaka))
  
👨‍🎓**Wasana Muthumali** ([muthumaliperera](https://github.com/muthumaliperera))
  
👨‍🎓**Prasitha Samaarachchi** ([Prasitha7](https://github.com/Prasitha7))

👨‍🎓**Chamith Dilshan** ([Chamith-Dilshan](https://github.com/Chamith-Dilshan))

👨‍🎓**Deshan Narayana** ([deshanbsn](https://github.com/deshanbsn))

# 🟧 Project Plan 🟧

![WhatsApp Image 2024-06-09 at 12 21 57_69e1a44d](https://github.com/SE-LAPS/Fully-functional-Job-Portal-System/assets/87580847/55597553-303f-4874-bb2b-8645689d8871)

# 🟦 Project Time-Line 🟦

![Time-line](https://github.com/SE-LAPS/Fully-functional-Job-Portal-System/assets/87580847/6060c6fc-63ff-4204-86b5-d48c4af4b214)
