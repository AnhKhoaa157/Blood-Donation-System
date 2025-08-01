<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# BLOOD-DONATION-SYSTEM

<em>Empowering Lives Through Seamless Blood Donation Innovation</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/AnhKhoaa157/Blood-Donation-System?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
<img src="https://img.shields.io/github/last-commit/AnhKhoaa157/Blood-Donation-System?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/AnhKhoaa157/Blood-Donation-System?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/AnhKhoaa157/Blood-Donation-System?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Leaflet-199900.svg?style=flat&logo=Leaflet&logoColor=white" alt="Leaflet">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<br>
<img src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style=flat&logo=Yarn&logoColor=white" alt="Yarn">
<img src="https://img.shields.io/badge/XML-005FAD.svg?style=flat&logo=XML&logoColor=white" alt="XML">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgment](#acknowledgment)

---

## Overview

Blood-Donation-System is a full-stack platform that simplifies blood donation management through a robust backend and an engaging frontend. Built with Spring Boot and React, it offers a scalable, secure, and user-centric solution for healthcare providers and community organizers. 

**Why Blood-Donation-System?**

This project streamlines blood donation workflows, ensuring efficiency and security. The core features include:

- 🛡️ **Security & Authentication:** JWT-based login and role management for safe access.
- 📊 **Rich Data Models:** Entities for blood, users, donation activities, and notifications.
- ⚙️ **Modular Architecture:** Supports CRUD, filtering, pagination, and real-time updates.
- 🎨 **User-Friendly UI:** React components for admin dashboards, user profiles, and content management.
- 📧 **Automated Notifications:** Email alerts for donation statuses and system updates.
- 🧰 **Developer-Focused:** Clear API design, scalable backend, and maintainable codebase.

---

## Features

|      | Component            | Details                                                                                     |
| :--- | :------------------- | :------------------------------------------------------------------------------------------ |
| ⚙️  | **Architecture**     | <ul><li>Client-Server MVC pattern</li><li>Separation of Front-End (React) and Back-End (Java)</li><li>RESTful API endpoints</li></ul> |
| 🔩 | **Code Quality**     | <ul><li>Consistent Java coding standards for backend</li><li>React components follow modular design</li><li>Use of ESLint and code linters for JavaScript</li></ul> |
| 📄 | **Documentation**    | <ul><li>Basic README with project overview</li><li>API documentation via Swagger/OpenAPI (assumed)</li><li>Comments in code for key modules</li></ul> |
| 🔌 | **Integrations**      | <ul><li>Java backend integrates with SQL database (likely MySQL/PostgreSQL)</li><li>React frontend uses Axios for API calls</li><li>JWT for authentication tokens</li></ul> |
| 🧩 | **Modularity**        | <ul><li>Backend modules separated by services (e.g., User, Donation, Blood Bank)</li><li>Frontend components divided into pages and reusable UI components</li></ul> |
| 🧪 | **Testing**           | <ul><li>Unit tests in Java (JUnit, Mockito)</li><li>React testing with Jest and React Testing Library</li><li>CI/CD pipelines likely include test stages</li></ul> |
| ⚡️  | **Performance**       | <ul><li>Use of React hooks for efficient rendering</li><li>Backend optimized with connection pooling</li><li>Asynchronous API calls for responsiveness</li></ul> |
| 🛡️ | **Security**          | <ul><li>JWT-based authentication and authorization</li><li>Input validation on both client and server</li><li>Secure storage of sensitive data</li></ul> |
| 📦 | **Dependencies**      | <ul><li>Backend: Maven dependencies for Jakarta Mail, JJWT, SQL drivers</li><li>Frontend: React, Ant Design, Axios, Leaflet, Slate</li><li>Package management via npm and yarn</li></ul> |

---

## Project Structure

```sh
└── Blood-Donation-System/
    ├── Back-End
    │   └── hienmauapi-main
    ├── Front-End
    │   ├── .env
    │   ├── .gitignore
    │   ├── .hintrc
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │   ├── src
    │   ├── vite.config.js
    │   └── yarn.lock
    └── README.md
```

---

### Project Index

<details open>
	<summary><b><code>BLOOD-DONATION-SYSTEM/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- The main purpose of this code file, as part of the Blood Donation System project, is to serve as the foundational documentation that introduces and guides users through the applications architecture and functionality<br>- It provides a clear overview of how the system is structured and the technologies employed, emphasizing its role in facilitating seamless blood donation processes<br>- This README acts as a roadmap for developers and stakeholders, highlighting the systems core objectives—empowering life through innovative, user-friendly features—while ensuring clarity on how the various components work together within the overall architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- Back-End Submodule -->
	<details>
		<summary><b>Back-End</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ Back-End</b></code>
			<!-- hienmauapi-main Submodule -->
			<details>
				<summary><b>hienmauapi-main</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ Back-End.hienmauapi-main</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/pom.xml'>pom.xml</a></b></td>
							<td style='padding: 8px;'>- Defines project dependencies and configuration for a Spring Boot-based backend focused on blood donation management<br>- Facilitates core functionalities such as user authentication, data persistence, and email notifications, forming the foundational setup for the applications server-side architecture<br>- Ensures compatibility with Java 21 and integrates essential libraries for security, data handling, and communication.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/dump-blooddonate-202506182219.sql'>dump-blooddonate-202506182219.sql</a></b></td>
							<td style='padding: 8px;'>- The provided SQL dump file serves as the foundational database schema and initial data setup for the Blood Donation Management System<br>- It defines the structure of the database, including tables, relationships, and constraints necessary to support core functionalities such as donor registration, blood inventory tracking, donation scheduling, and reporting<br>- This file is essential for establishing a consistent and reliable data layer that underpins the entire backend architecture, enabling efficient management and retrieval of blood donation-related information within the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/README.md'>README.md</a></b></td>
							<td style='padding: 8px;'>- Provides an overview of the hienmauapi project, outlining its core purpose within the backend architecture<br>- It details how the API facilitates interactions with the applications data and services, supporting functionalities essential for managing user data, transactions, and system operations<br>- This documentation ensures clarity on the APIs role in enabling seamless integration and data flow within the overall system.</td>
						</tr>
					</table>
					<!-- src Submodule -->
					<details>
						<summary><b>src</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Back-End.hienmauapi-main.src</b></code>
							<!-- test Submodule -->
							<details>
								<summary><b>test</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Back-End.hienmauapi-main.src.test</b></code>
									<!-- java Submodule -->
									<details>
										<summary><b>java</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ Back-End.hienmauapi-main.src.test.java</b></code>
											<!-- org Submodule -->
											<details>
												<summary><b>org</b></summary>
												<blockquote>
													<div class='directory-path' style='padding: 8px 0; color: #666;'>
														<code><b>⦿ Back-End.hienmauapi-main.src.test.java.org</b></code>
													<!-- fpt Submodule -->
													<details>
														<summary><b>fpt</b></summary>
														<blockquote>
															<div class='directory-path' style='padding: 8px 0; color: #666;'>
																<code><b>⦿ Back-End.hienmauapi-main.src.test.java.org.fpt</b></code>
															<!-- blooddonate Submodule -->
															<details>
																<summary><b>blooddonate</b></summary>
																<blockquote>
																	<div class='directory-path' style='padding: 8px 0; color: #666;'>
																		<code><b>⦿ Back-End.hienmauapi-main.src.test.java.org.fpt.blooddonate</b></code>
																	<table style='width: 100%; border-collapse: collapse;'>
																	<thead>
																		<tr style='background-color: #f8f9fa;'>
																			<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																			<th style='text-align: left; padding: 8px;'>Summary</th>
																		</tr>
																	</thead>
																		<tr style='border-bottom: 1px solid #eee;'>
																			<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/test/java/org/fpt/blooddonate/BlooddonateApplicationTests.java'>BlooddonateApplicationTests.java</a></b></td>
																			<td style='padding: 8px;'>- Validates the applications ability to load the Spring Boot context successfully, ensuring core dependencies and configurations are correctly set up<br>- Serves as a foundational test to confirm the overall integrity of the backend system within the blood donation platform, supporting reliable deployment and operation of the entire codebase.</td>
																		</tr>
																	</table>
																</blockquote>
															</details>
														</blockquote>
													</details>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- main Submodule -->
							<details>
								<summary><b>main</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Back-End.hienmauapi-main.src.main</b></code>
									<!-- java Submodule -->
									<details>
										<summary><b>java</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ Back-End.hienmauapi-main.src.main.java</b></code>
											<!-- org Submodule -->
											<details>
												<summary><b>org</b></summary>
												<blockquote>
													<div class='directory-path' style='padding: 8px 0; color: #666;'>
														<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org</b></code>
													<!-- fpt Submodule -->
													<details>
														<summary><b>fpt</b></summary>
														<blockquote>
															<div class='directory-path' style='padding: 8px 0; color: #666;'>
																<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt</b></code>
															<!-- blooddonate Submodule -->
															<details>
																<summary><b>blooddonate</b></summary>
																<blockquote>
																	<div class='directory-path' style='padding: 8px 0; color: #666;'>
																		<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate</b></code>
																	<table style='width: 100%; border-collapse: collapse;'>
																	<thead>
																		<tr style='background-color: #f8f9fa;'>
																			<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																			<th style='text-align: left; padding: 8px;'>Summary</th>
																		</tr>
																	</thead>
																		<tr style='border-bottom: 1px solid #eee;'>
																			<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/BlooddonateApplication.java'>BlooddonateApplication.java</a></b></td>
																			<td style='padding: 8px;'>- Initialize and configure the core Spring Boot application for the blood donation platform, serving as the entry point for the backend system<br>- It orchestrates the startup process, enabling the deployment of RESTful services and backend functionalities essential for managing blood donation operations within the overall architecture.</td>
																		</tr>
																	</table>
																	<!-- middlewares Submodule -->
																	<details>
																		<summary><b>middlewares</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.middlewares</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/middlewares/JwtAuthenticationFilter.java'>JwtAuthenticationFilter.java</a></b></td>
																					<td style='padding: 8px;'>- Implements JWT-based authentication by intercepting incoming requests, validating tokens, and establishing user identity within the security context<br>- Ensures secure access control across protected endpoints while allowing unauthenticated access to public routes such as login, registration, and static resources<br>- Integrates seamlessly into the applications security architecture to enforce role-based authorization.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- configs Submodule -->
																	<details>
																		<summary><b>configs</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.configs</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/configs/SecurityConfig.java'>SecurityConfig.java</a></b></td>
																					<td style='padding: 8px;'>- Defines security configurations for the backend, establishing authentication and authorization protocols<br>- Implements JWT-based authentication, manages CORS policies, and sets security filters to control access to API endpoints, ensuring secure communication between clients and the server within the overall application architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/configs/AppConfig.java'>AppConfig.java</a></b></td>
																					<td style='padding: 8px;'>- Defines core application constants and status codes for the blood donation system, facilitating consistent reference across the codebase<br>- It centralizes key identifiers for user roles, donation activities, request statuses, and inventory states, supporting seamless communication and state management within the overall architecture<br>- This configuration ensures uniformity and clarity in handling various workflows and data states throughout the application.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/configs/WebConfig.java'>WebConfig.java</a></b></td>
																					<td style='padding: 8px;'>- Configures static resource handling for the web application, enabling access to uploaded files through a designated URL path<br>- This setup facilitates serving user-uploaded content, such as images or documents, ensuring seamless integration of uploaded assets within the overall backend architecture of the blood donation platform.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- models Submodule -->
																	<details>
																		<summary><b>models</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.models</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/Notification.java'>Notification.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the Notification entity within the backend architecture, representing alerts or announcements related to blood donation activities<br>- It facilitates storing and managing notification details such as title, content, images, creator, and active status, enabling effective communication and timely updates to users across the system<br>- This model integrates seamlessly with the database to support notification lifecycle management.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/BloodDonationActivity.java'>BloodDonationActivity.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the BloodDonationActivity entity, representing organized blood donation events within the system<br>- It encapsulates event details such as schedule, location, capacity, and status, while establishing relationships with users and donation requests<br>- Serves as a core component for managing and tracking blood donation activities, facilitating event creation, updates, and participant management within the overall blood donation platform.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/Blood.java'>Blood.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the Blood entity representing blood group information within the database<br>- It facilitates management of blood types, including attributes like name, description, status, and timestamps for creation and updates<br>- Serves as a core component for handling blood group data, supporting the applications blood donation and inventory functionalities.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/BloodReceiveRequest.java'>BloodReceiveRequest.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the data model for blood donation requests, encapsulating essential details such as recipient information, blood type, quantity, status, and health status<br>- Serves as a core component within the backend architecture to manage and track blood receive requests, facilitating seamless data persistence and retrieval for blood donation operations.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/Blog.java'>Blog.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the Blog entity within the backend architecture, representing individual blog posts in the application<br>- It facilitates content management by encapsulating attributes such as title, content, category, view count, creator, status, and timestamps for creation and updates<br>- Serves as a core model for storing and retrieving blog-related data, supporting the platforms content publishing and categorization functionalities.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/BloodDonationRequest.java'>BloodDonationRequest.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the data model for blood donation requests within the applications architecture, encapsulating all relevant information such as donor details, donation schedule, health status, approval process, and request status<br>- Serves as a core component for managing and tracking blood donation activities, ensuring data consistency and facilitating interactions between users, donation events, and administrative workflows.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/User.java'>User.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the User entity within the backend architecture, encapsulating user-related data such as personal details, authentication credentials, blood type, and status<br>- Serves as a core model for managing user information, supporting functionalities like registration, authentication, and profile management, and integrates with other domain models to facilitate blood donation operations and user management workflows.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/CompatibleBlood.java'>CompatibleBlood.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the compatibility relationships between different blood types within the blood donation system, enabling the application to determine suitable blood matches for transfusions<br>- Serves as a core data model that supports the integrity and management of blood compatibility information, facilitating accurate and efficient blood matching processes across the entire system architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/BloodUnitWareHouse.java'>BloodUnitWareHouse.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the data model for blood units stored in the warehouse, capturing essential details such as blood type, components, storage location, collection and expiration dates, and associated donor and request information<br>- Serves as a core component within the backend architecture to manage inventory, track blood unit status, and facilitate inventory operations in the blood donation management system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/BlogCategory.java'>BlogCategory.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the BlogCategory entity within the backend architecture, representing categories for blog posts in the application<br>- Facilitates structured management of blog content by storing category details such as title, content, status, and timestamps for creation and updates, thereby supporting organized content classification and retrieval in the overall system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/EmployeeInformation.java'>EmployeeInformation.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the EmployeeInformation entity representing staff details within the applications data model<br>- It facilitates storage and management of employee-specific data such as position, department, employment status, and associated user information, supporting core HR and personnel management functionalities in the overall system architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/SupportTicket.java'>SupportTicket.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the SupportTicket entity representing user support requests within the applications architecture<br>- Facilitates tracking, managing, and updating support inquiries, including user details, status, and history<br>- Integrates with the overall system to enable efficient handling of user support interactions, ensuring seamless communication and resolution workflows across the platform.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/SupportTicketHistory.java'>SupportTicketHistory.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the SupportTicketHistory entity, capturing the chronological record of interactions and status changes within support tickets<br>- It facilitates tracking support support activities, updates, and communication history, thereby ensuring transparency and accountability in the support process within the overall blood donation management system.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- exceptions Submodule -->
																	<details>
																		<summary><b>exceptions</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.exceptions</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/exceptions/GlobalExceptionHandler.java'>GlobalExceptionHandler.java</a></b></td>
																					<td style='padding: 8px;'>- Provides centralized handling of exceptions across the backend API, ensuring consistent and meaningful error responses for validation failures and unexpected issues<br>- Enhances robustness and user experience by capturing common error scenarios and translating them into clear HTTP responses, thereby supporting the overall stability and maintainability of the applications error management architecture.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- controllers Submodule -->
																	<details>
																		<summary><b>controllers</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.controllers</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/AdminBloodUnitWareHouseController.java'>AdminBloodUnitWareHouseController.java</a></b></td>
																					<td style='padding: 8px;'>- Provides administrative endpoints for managing blood unit inventory within the warehouse, enabling retrieval, status updates, testing, and cancellation of blood units<br>- Integrates with the service layer to facilitate key operations, supporting efficient inventory control and ensuring accurate tracking of blood units throughout their lifecycle in the blood donation system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/DashBoardController.java'>DashBoardController.java</a></b></td>
																					<td style='padding: 8px;'>- Provides an API endpoint for aggregating key dashboard metrics related to blood donation management, including counts of requests, inventory, users, activities, and blog posts<br>- Facilitates comprehensive data analysis for administrative insights, supporting overall system monitoring and decision-making within the blood donation platform architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/AdminCompatibleBloodController.java'>AdminCompatibleBloodController.java</a></b></td>
																					<td style='padding: 8px;'>- Defines administrative endpoints for managing compatible blood records, enabling creation and status updates within the blood donation system<br>- Facilitates backend operations related to blood compatibility, ensuring administrators can efficiently maintain and modify blood compatibility data, integral to the overall blood donation management architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/BlogCategoryController.java'>BlogCategoryController.java</a></b></td>
																					<td style='padding: 8px;'>- Defines RESTful endpoints for managing blog categories within the backend architecture, enabling creation, retrieval, updating, and deletion of categories<br>- Facilitates organized content classification, supporting the overall content management system by providing essential operations to maintain and access blog category data efficiently<br>- Serves as a key interface between client requests and the underlying business logic for blog category handling.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/BloodReceiveRequestController.java'>BloodReceiveRequestController.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blood receive requests within the blood donation system, enabling users to create, retrieve, update, and cancel requests<br>- Facilitates access to detailed request information and available blood units in the warehouse, integrating user authentication to ensure secure operations<br>- Supports seamless coordination between donors, recipients, and inventory management, forming a core component of the backends blood request handling architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/BloodDonationRequestController.java'>BloodDonationRequestController.java</a></b></td>
																					<td style='padding: 8px;'>- Facilitates management of blood donation requests by providing endpoints for retrieving, creating, updating, and canceling requests<br>- Integrates user authentication to ensure requests are associated with the correct user, supporting seamless interaction within the overall blood donation platform architecture<br>- Serves as a key component for handling user-initiated blood donation workflows and maintaining request lifecycle integrity.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/UserController.java'>UserController.java</a></b></td>
																					<td style='padding: 8px;'>- Provides RESTful endpoints for managing user data within the application, including retrieval, creation, and deletion of user records<br>- Facilitates user-related operations such as fetching all users with filtering options, obtaining user details by ID, locating nearby users, and creating employee profiles<br>- Integrates with user and employee services to support core user management functionalities essential to the system’s architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/AuthController.java'>AuthController.java</a></b></td>
																					<td style='padding: 8px;'>- Facilitates user authentication and profile management within the application by handling login, registration, password changes, and profile updates through RESTful API endpoints<br>- Serves as the primary interface for client interactions related to user identity, integrating with backend services to ensure secure and efficient user account operations within the overall system architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/AdminBloodDonationRequestController.java'>AdminBloodDonationRequestController.java</a></b></td>
																					<td style='padding: 8px;'>- Facilitates administrative management of blood donation requests by providing endpoints to retrieve, approve, reject, and complete requests<br>- Integrates with the service layer to handle request workflows, ensuring efficient oversight of donation activities within the overall blood donation system architecture<br>- Supports filtering and detailed request handling to streamline administrative operations.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/SupportTicketController.java'>SupportTicketController.java</a></b></td>
																					<td style='padding: 8px;'>- Facilitates management of support tickets within the application by providing endpoints for retrieving, creating, and updating ticket statuses<br>- Integrates with the support ticket service layer to enable users to submit issues, view existing tickets, and modify their statuses, thereby supporting effective customer support workflows and issue tracking in the overall system architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/BloodDonationActivityController.java'>BloodDonationActivityController.java</a></b></td>
																					<td style='padding: 8px;'>- Defines RESTful endpoints for managing blood donation activities, enabling creation, retrieval, updating, and detailed viewing of activities within the backend architecture<br>- Facilitates interaction between client requests and the service layer, supporting efficient data handling and ensuring seamless integration with other system components in the blood donation management platform.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/BlogController.java'>BlogController.java</a></b></td>
																					<td style='padding: 8px;'>- Defines RESTful endpoints for managing blog content within the application, enabling creation, retrieval, updating, and deletion of blog posts<br>- Integrates with the service layer to handle business logic, supporting features like pagination, filtering, and detailed error handling<br>- Serves as the primary interface for client interactions with blog-related data, ensuring seamless content management within the overall system architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/NotificationController.java'>NotificationController.java</a></b></td>
																					<td style='padding: 8px;'>- Manages notification-related operations within the backend architecture, enabling retrieval, creation, updating, and deletion of notifications<br>- Facilitates communication of important updates or alerts to users by providing endpoints for accessing active and all notifications, ensuring seamless integration with the overall system for timely user engagement and information dissemination.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/CompatibleBloodController.java'>CompatibleBloodController.java</a></b></td>
																					<td style='padding: 8px;'>- Defines REST endpoints for managing compatible blood types within the blood donation system<br>- Facilitates retrieval of all compatible blood matches and specific receive-compatible blood types based on blood ID, supporting the applications core functionality of ensuring safe and effective blood transfusions<br>- Integrates with the service layer to provide essential data for blood compatibility operations across the platform.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/BloodController.java'>BloodController.java</a></b></td>
																					<td style='padding: 8px;'>- Defines RESTful endpoints for managing blood records within the backend API, enabling clients to perform CRUD operations<br>- Serves as the primary interface for interacting with blood data, coordinating requests with the underlying service layer to facilitate data retrieval, creation, updates, and deletions, thereby supporting the overall blood donation management system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/AdminBloodReceiveRequestController.java'>AdminBloodReceiveRequestController.java</a></b></td>
																					<td style='padding: 8px;'>- Manages administrative operations for blood receive requests, including retrieval, status updates, and detailed information access<br>- Facilitates workflow transitions such as marking requests as available, rejecting, or completing them, while providing insights into associated blood units in warehouse and usage<br>- Integrates with the service layer to support efficient handling of blood donation and receipt processes within the overall system architecture.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- services Submodule -->
																	<details>
																		<summary><b>services</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.services</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BloodUnitWareHouseService.java'>BloodUnitWareHouseService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blood unit inventory within the warehouse, enabling retrieval, status updates, and testing results recording<br>- Facilitates workflow transitions such as canceling or marking blood units as tested, ensuring proper state management aligned with the overall blood donation system architecture<br>- Supports efficient tracking and processing of blood units throughout their lifecycle in the blood donation process.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BlogCategoryService.java'>BlogCategoryService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blog category data within the application, enabling retrieval, creation, updating, and soft deletion of categories<br>- Integrates with the repository layer to ensure consistent data operations, supporting the broader content management architecture by organizing blog content into manageable categories for improved user navigation and content classification.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BloodReceiveRequestService.java'>BloodReceiveRequestService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blood receive requests within the blood donation system, facilitating creation, updates, status transitions, and cancellations<br>- Ensures proper allocation of blood units, maintains request workflows, and triggers email notifications<br>- Integrates with repositories to handle data persistence and enforces business rules for request processing, supporting efficient blood inventory management and donor-recipient coordination.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/SupportTicketService.java'>SupportTicketService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages support ticket lifecycle within the application, enabling creation, retrieval, and status updates<br>- Facilitates tracking user-reported issues, maintaining historical records, and notifying users of status changes via email<br>- Integrates with user and support ticket repositories to ensure data consistency and supports paginated queries for efficient ticket management across the system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BloodDonationActivityService.java'>BloodDonationActivityService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blood donation activities by enabling creation, retrieval, updating, and listing of donation events<br>- Facilitates coordination of donation campaigns, ensuring proper access control and status management within the overall blood donation platform architecture<br>- Supports seamless interaction between users and donation events, contributing to efficient blood collection efforts.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BlogService.java'>BlogService.java</a></b></td>
																					<td style='padding: 8px;'>- Provides core functionalities for managing blog content within the application, including creating, updating, retrieving, and soft-deleting blog posts<br>- Facilitates interaction with blog categories and handles media uploads, supporting the overall content management architecture of the platform<br>- Ensures seamless integration of blog operations with data persistence and media storage components.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/NotificationService.java'>NotificationService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages notification lifecycle within the application, including creation, retrieval, updating, and soft deletion<br>- Facilitates handling notification data, associated media uploads, and ensures proper access control based on user context<br>- Integrates with repositories to maintain consistent notification records, supporting the overall communication and alerting architecture of the blood donation platform.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BloodDonationRequestService.java'>BloodDonationRequestService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blood donation requests by facilitating creation, updates, status transitions, and approvals within the system<br>- Ensures proper handling of donation workflows, including validation, notifications, and inventory updates, to support the overall blood donation management architecture<br>- This service acts as a core component for orchestrating user-initiated donation processes and administrative oversight.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BloodService.java'>BloodService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blood type data within the system, enabling retrieval, creation, updating, and soft deletion of blood records<br>- Facilitates core CRUD operations and maintains data consistency, supporting the broader blood donation platform by ensuring accurate and up-to-date blood type information essential for matching donors and recipients.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/UserService.java'>UserService.java</a></b></td>
																					<td style='padding: 8px;'>- Provides user management and location-based functionalities within the blood donation platform<br>- Facilitates retrieving user data, filtering users by roles or proximity, and managing user status<br>- Integrates blood compatibility logic to identify nearby potential donors, supporting the systems goal of connecting donors and recipients efficiently based on blood type compatibility and geographic distance.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/CompatibleBloodService.java'>CompatibleBloodService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages compatibility relationships between blood types, enabling retrieval, creation, and status updates of compatible blood pairs within the blood donation system<br>- Facilitates ensuring safe transfusions by maintaining accurate compatibility data, integral to the backend architecture that supports blood matching and donor-recipient management.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/AuthService.java'>AuthService.java</a></b></td>
																					<td style='padding: 8px;'>- Handles user authentication and profile management within the blood donation platform<br>- Facilitates user login, registration, password changes, and profile updates, ensuring secure access and data consistency<br>- Integrates with user and blood repositories to validate and persist user information, supporting the overall architecture of user identity and access control in the system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/EmployeeService.java'>EmployeeService.java</a></b></td>
																					<td style='padding: 8px;'>- Facilitates the creation of new employee accounts by validating input data, ensuring unique identifiers, and integrating user and employee information into the system<br>- It supports the broader architecture by managing user registration workflows, maintaining data integrity, and aligning employee details with authentication and authorization mechanisms within the backend infrastructure.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- utils Submodule -->
																	<details>
																		<summary><b>utils</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.utils</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/utils/SendEmail.java'>SendEmail.java</a></b></td>
																					<td style='padding: 8px;'>- The <code>SendEmail.java</code> utility class is responsible for facilitating email communications within the blood donation platform<br>- It primarily handles sending notification emails related to changes in blood donation requests and other user interactions<br>- By abstracting email-sending functionalities, this class supports the broader systems goal of maintaining effective communication with users, ensuring timely updates on donation statuses and requests<br>- This contributes to the overall architecture by enabling seamless, automated email notifications that enhance user engagement and operational transparency across the platform.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/utils/KetQuaXetNghiem.java'>KetQuaXetNghiem.java</a></b></td>
																					<td style='padding: 8px;'>- Defines a data structure representing medical test results and vital signs for blood donation patients<br>- It encapsulates key health metrics and symptoms, facilitating data transfer and processing within the applications health assessment workflow<br>- This class supports the overall system by standardizing patient health information for accurate evaluation and decision-making.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/utils/AuthUtil.java'>AuthUtil.java</a></b></td>
																					<td style='padding: 8px;'>- Provides utility functions for generating, validating, and extracting user information from JSON Web Tokens (JWTs), facilitating secure authentication and authorization within the backend architecture<br>- It centralizes token management, ensuring consistent handling of user sessions and roles across the application<br>- This component is essential for maintaining secure access control in the overall system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/utils/ThongTinHienMau.java'>ThongTinHienMau.java</a></b></td>
																					<td style='padding: 8px;'>- Defines a data structure for capturing comprehensive blood donation information, including health status, risk factors, medication use, vital signs, and medical conclusions<br>- It facilitates organized data collection and transfer within the backend system, supporting accurate assessment and decision-making in blood donation management<br>- This class plays a crucial role in ensuring consistent and structured health data handling across the application.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/utils/TextUtil.java'>TextUtil.java</a></b></td>
																					<td style='padding: 8px;'>- Facilitates text normalization by removing Vietnamese diacritical marks, ensuring consistent and accent-free string processing across the application<br>- Integral to the backend architecture, it supports data standardization for user inputs and database interactions, enhancing search accuracy and data consistency within the blood donation management system.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- dtos Submodule -->
																	<details>
																		<summary><b>dtos</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.dtos</b></code>
																			<!-- responses Submodule -->
																			<details>
																				<summary><b>responses</b></summary>
																				<blockquote>
																					<div class='directory-path' style='padding: 8px 0; color: #666;'>
																						<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.dtos.responses</b></code>
																					<table style='width: 100%; border-collapse: collapse;'>
																					<thead>
																						<tr style='background-color: #f8f9fa;'>
																							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																							<th style='text-align: left; padding: 8px;'>Summary</th>
																						</tr>
																					</thead>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/responses/AnalysisResponseDTO.java'>AnalysisResponseDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Provides a comprehensive data transfer object for summarizing key metrics within the blood donation platform<br>- It encapsulates aggregate counts related to blood requests, donations, inventory, activities, and user engagement, facilitating efficient communication of overall system status and analytics across the applications components<br>- This enhances data consistency and supports reporting functionalities within the backend architecture.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/responses/LoginResponseDTO.java'>LoginResponseDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the structure of the login response, encapsulating user details and authentication token<br>- Facilitates seamless communication between backend authentication processes and client applications by standardizing the data format for successful login operations within the overall system architecture<br>- Ensures consistent delivery of user identity and session information across the application.</td>
																						</tr>
																					</table>
																				</blockquote>
																			</details>
																			<!-- requests Submodule -->
																			<details>
																				<summary><b>requests</b></summary>
																				<blockquote>
																					<div class='directory-path' style='padding: 8px 0; color: #666;'>
																						<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.dtos.requests</b></code>
																					<table style='width: 100%; border-collapse: collapse;'>
																					<thead>
																						<tr style='background-color: #f8f9fa;'>
																							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																							<th style='text-align: left; padding: 8px;'>Summary</th>
																						</tr>
																					</thead>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateBlogCategoryRequestDTO.java'>UpdateBlogCategoryRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for updating blog categories, encapsulating the title and content fields with validation constraints<br>- Integrates into the backend architecture to facilitate structured data exchange during blog category modification requests, ensuring data integrity and consistency within the overall content management workflow.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateBloodDonationActivityRequestDTO.java'>CreateBloodDonationActivityRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for creating a new blood donation activity, encapsulating essential details such as name, start and end dates, location, description, and maximum participant capacity<br>- Serves as a request DTO within the backend API, facilitating data validation and transfer for initiating blood donation events in the overall system architecture.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateBloodDonationActivityRequestDTO.java'>UpdateBloodDonationActivityRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines a data transfer object for updating blood donation activities, encapsulating essential details such as name, start and end dates, location, description, status, and maximum participant capacity<br>- Facilitates seamless validation and data handling within the backend architecture, ensuring consistent and reliable updates to blood donation event records across the system.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/ChangeStatusDonationRequestDTO.java'>ChangeStatusDonationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines a data transfer object for updating donation status, encapsulating relevant details such as notes and medical examination forms<br>- Facilitates communication between client requests and backend processing within the blood donation management system, ensuring structured and consistent data handling during status change operations.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/ChangePasswordRequestDTO.java'>ChangePasswordRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for handling user password change requests within the backend API<br>- Facilitates secure and validated transmission of current and new passwords, supporting user account management and security workflows in the overall blood donation system architecture<br>- Ensures proper data structure for password update operations across the applications services.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateNotificationRequestDTO.java'>UpdateNotificationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for updating notifications within the backend system, encapsulating notification details such as title, content, associated image, start date, and end date<br>- Facilitates structured data exchange for notification management, supporting validation and integration with the applications notification update workflows in the overall blood donation platform architecture.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateBloodRequestDTO.java'>UpdateBloodRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for updating blood donation requests, encapsulating essential fields such as name and description<br>- Facilitates validation and data integrity during update operations within the backend architecture, supporting seamless communication between client requests and server processing in the blood donation management system.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/RegisterRequestDTO.java'>RegisterRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for user registration requests within the blood donation platform, capturing essential personal and health information<br>- Serves as a key component for validating and transferring user input during account creation, ensuring data consistency and integrity across the backend system<br>- Facilitates seamless onboarding by standardizing registration data handling within the applications architecture.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateEmployeeRequestDTO.java'>CreateEmployeeRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for creating new employee records within the backend system, facilitating user input validation and data transfer during employee onboarding<br>- It supports the overall architecture by standardizing employee data submission, ensuring consistency and integrity across the applications HR management functionalities.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateBlogCategoryRequestDTO.java'>CreateBlogCategoryRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for creating blog categories, encapsulating the necessary input fields with validation constraints<br>- Integrates into the backend architecture to facilitate structured and validated data submission for blog category management, supporting the overall content management functionality within the blood donation platform.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/LoginRequestDTO.java'>LoginRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for login requests, encapsulating user credentials with validation constraints<br>- Facilitates secure and structured communication between client and server during authentication processes within the backend architecture of the blood donation application<br>- Ensures proper data handling and validation for login operations across the system.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CompleteReceiveRequestDTO.java'>CompleteReceiveRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines a data transfer object for completing blood donation reception, encapsulating the necessary form identifier<br>- Serves as a request payload within the backend API, facilitating validation and data consistency during the donation process<br>- Integrates into the overall architecture by enabling structured communication between client requests and server-side processing in the blood donation management system.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CancelBloodUnitWareHouseRequestDTO.java'>CancelBloodUnitWareHouseRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for canceling a blood unit in the warehouse, encapsulating the necessary cancellation note<br>- It facilitates communication between client requests and backend processing within the blood donation management system, ensuring proper validation and data integrity during the cancellation workflow<br>- This DTO supports the overall architecture by standardizing request data for warehouse-related operations.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateReceiveDonationRequestDTO.java'>UpdateReceiveDonationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines a data transfer object for updating blood donation reception details, encapsulating key information such as expected donation date, blood type, components, quantity, location, health status, and urgency<br>- Serves as a structured request payload within the backend architecture to facilitate accurate and validated updates to blood donation records.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateStatusCompatibleBlood.java'>UpdateStatusCompatibleBlood.java</a></b></td>
																							<td style='padding: 8px;'>- Defines a data transfer object for updating the compatibility status of blood within the blood donation system<br>- It facilitates the process of modifying blood status information through API requests, supporting the overall architecture by enabling seamless and validated data updates related to blood compatibility<br>- This enhances data integrity and consistency across the backend services.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateReceiveDonationRequestDTO.java'>CreateReceiveDonationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for creating a blood donation reception request, encapsulating essential details such as collection date, blood type, components, quantity, health status, and location<br>- Serves as a key component in the backend API to facilitate accurate and validated submission of donation reception information within the blood donation management system.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateCompatibleBloodDTO.java'>CreateCompatibleBloodDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for creating blood compatibility records, encapsulating donor and recipient blood group information<br>- Facilitates validation and data handling within the blood donation system, supporting the process of matching compatible blood types for transfusions<br>- Integrates into the backend architecture to streamline blood compatibility operations and ensure data integrity.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateBloodRequestDTO.java'>CreateBloodRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for creating new blood donation requests, encapsulating essential information such as the requesters name and description<br>- Serves as a structured input for API endpoints, facilitating validation and data consistency within the overall blood donation management system<br>- Ensures seamless communication between client requests and backend processing.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateStatusSupportTicketRequestDTO.java'>UpdateStatusSupportTicketRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for updating support ticket statuses within the backend system, facilitating communication between client requests and server-side processing<br>- It ensures validation of required fields and supports status management workflows, integrating seamlessly into the overall support ticket handling architecture of the blood donation platform.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateBlogRequestDTO.java'>CreateBlogRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for creating a new blog post, encapsulating title, content, image, and category information<br>- Facilitates structured data exchange between client requests and server-side processing within the backend architecture of the blood donation platform<br>- Ensures validation and consistency for blog creation operations across the application.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateProfileRequestDTO.java'>UpdateProfileRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for updating user profiles within the blood donation platform<br>- It encapsulates user personal details, health information, and physical metrics, facilitating structured and validated data exchange between client requests and backend processing<br>- This component ensures accurate and consistent profile updates aligned with the applications data integrity standards.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateBloodDonationRequestDTO.java'>UpdateBloodDonationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for updating blood donation records, ensuring validation of key donor information such as donation date, recovery period, health status, and donation type<br>- Integrates into the backend API to facilitate accurate and consistent modifications of blood donation data, supporting the overall systems goal of managing blood donation workflows effectively.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateBlogRequestDTO.java'>UpdateBlogRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for updating blog posts, encapsulating title, content, optional image, and category information<br>- Facilitates validation and data handling within the backend API, supporting seamless blog content modifications in the overall blood donation platform architecture<br>- Ensures structured and validated input for blog update operations.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateSupportTicketRequestDTO.java'>CreateSupportTicketRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for creating support tickets within the backend system, capturing essential user information such as name, email, phone number, and ticket details<br>- Facilitates user support interactions by standardizing input data, ensuring validation, and integrating seamlessly with the overall architecture of the blood donation platforms customer support module.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CompleteDonationRequestDTO.java'>CompleteDonationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for completing a blood donation, encapsulating storage location and examination form details<br>- It facilitates structured data exchange between client requests and backend processing within the blood donation system, ensuring validation and consistency during the donation completion workflow<br>- This component supports seamless integration and data integrity across the applications donation management processes.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/TestedBloodUnitWareHouseRequestDTO.java'>TestedBloodUnitWareHouseRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for submitting tested blood unit information to the warehouse, ensuring validation of key fields such as test results and expiration date<br>- Integrates into the backend architecture to facilitate accurate and consistent data exchange between client requests and server processing within the blood donation management system.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateBloodDonationRequestDTO.java'>CreateBloodDonationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for creating blood donation requests, encapsulating essential donor and donation details<br>- It ensures input validation and standardizes data transfer within the backend system, facilitating accurate and consistent processing of blood donation submissions across the applications architecture.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateNotificationRequestDTO.java'>CreateNotificationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for creating notifications within the blood donation platform, encapsulating essential details such as title, content, image, start date, and end date<br>- Facilitates structured input for notification creation requests, ensuring data validation and consistency across the backend architecture<br>- Supports effective communication and timely updates to users regarding blood donation campaigns or announcements.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/ChangeStatusBloodReceiveRequestToAvailable.java'>ChangeStatusBloodReceiveRequestToAvailable.java</a></b></td>
																							<td style='padding: 8px;'>- Facilitates updating the status of blood units to available within the blood donation management system<br>- It encapsulates a list of blood unit identifiers, enabling efficient batch processing of blood inventory status changes<br>- This component supports seamless inventory management, ensuring accurate tracking and availability of blood units across the system.</td>
																						</tr>
																					</table>
																				</blockquote>
																			</details>
																		</blockquote>
																	</details>
																	<!-- repositories Submodule -->
																	<details>
																		<summary><b>repositories</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.repositories</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BloodReceiveRequestRepository.java'>BloodReceiveRequestRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Defines data access operations for managing blood receive requests within the system, enabling efficient retrieval and filtering based on status, keywords, and user associations<br>- Supports paginated queries to facilitate scalable handling of request records, integrating seamlessly into the overall backend architecture for blood donation management.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BlogCategoryRepository.java'>BlogCategoryRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access capabilities for managing blog category entities within the applications database<br>- It facilitates CRUD operations and queries related to blog categories, supporting the overall content management system of the blood donation platform<br>- This repository integrates with the larger architecture to enable efficient retrieval and manipulation of blog category data.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/SupportTicketRepository.java'>SupportTicketRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access capabilities for support ticket management within the application, enabling retrieval of support tickets with filtering by status and keyword search<br>- Integrates with the overall backend architecture to facilitate efficient querying and pagination of support-related data, supporting user support workflows and administrative oversight in the blood donation platform.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BloodDonationActivityRespository.java'>BloodDonationActivityRespository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access capabilities for blood donation activities, enabling retrieval and management of activity records within the application<br>- Facilitates paginated queries with filtering options based on activity status and keywords, supporting efficient search and data handling in the broader blood donation management system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BloodUnitWareHouseRepository.java'>BloodUnitWareHouseRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access methods for managing blood unit inventory within the warehouse, enabling retrieval of available blood units, filtering by status or location, and paginating results for efficient display<br>- Facilitates seamless integration between blood storage data and application logic, supporting inventory tracking, availability checks, and resource allocation in the blood donation management system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BlogRepository.java'>BlogRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Defines data access operations for retrieving blog entries within the applications architecture<br>- Facilitates efficient querying and pagination of blogs based on category, status, and keyword filters, supporting dynamic content filtering and management in the backend<br>- Serves as a crucial component for enabling flexible, scalable blog content retrieval aligned with user and administrative needs.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/SupportTicketHistoryRepository.java'>SupportTicketHistoryRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access capabilities for retrieving historical records of support tickets, enabling efficient tracking of support interactions within the applications architecture<br>- It facilitates querying support ticket history entries based on ticket identifiers, supporting features related to customer support management and issue resolution workflows<br>- This repository integrates with the broader backend system to ensure seamless data retrieval and support ticket lifecycle management.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/NotificationRepository.java'>NotificationRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access methods for managing notifications within the blood donation platform<br>- Facilitates retrieval of notifications based on status, keywords, and active date ranges, supporting paginated queries<br>- Integrates with the overall architecture to enable efficient, flexible notification filtering and retrieval, ensuring timely and relevant updates are accessible to users.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/CompatibleBloodRepository.java'>CompatibleBloodRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Defines data access methods for retrieving blood compatibility information within the backend architecture<br>- Facilitates querying compatible blood types based on donor or recipient blood group identifiers, supporting the systems core functionality of managing blood transfusion compatibility<br>- Integrates with the database layer to ensure efficient and accurate retrieval of compatibility data essential for blood donation operations.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BloodDonationRequestRepository.java'>BloodDonationRequestRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access methods for managing blood donation requests within the system, enabling retrieval, filtering, and pagination based on status, keywords, and user associations<br>- It supports efficient querying of donation requests to facilitate user-specific views and administrative oversight, integrating seamlessly into the overall backend architecture for blood donation management.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/EmployeeInformationRepository.java'>EmployeeInformationRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access capabilities for EmployeeInformation entities within the backend architecture, enabling retrieval and management of employee records<br>- It supports the overall system by facilitating efficient database interactions related to employee data, which is essential for managing blood donation personnel and ensuring accurate record-keeping across the application.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BloodRepository.java'>BloodRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access methods for Blood entities, enabling retrieval and existence checks based on blood type and status<br>- Integrates with the overall backend architecture to facilitate efficient management of blood inventory, supporting features such as inventory tracking and availability verification within the blood donation system<br>- Ensures seamless interaction between application logic and database storage.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/UserRepository.java'>UserRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access methods for user entities within the blood donation platform, enabling retrieval, verification, and filtering of user information based on roles, email, username, and blood group compatibility<br>- Facilitates efficient querying and management of user data to support core functionalities like user authentication, role management, and locating nearby blood donors, integral to the applications overall architecture.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																</blockquote>
															</details>
														</blockquote>
													</details>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- Front-End Submodule -->
	<details>
		<summary><b>Front-End</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ Front-End</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/vite.config.js'>vite.config.js</a></b></td>
					<td style='padding: 8px;'>- Configure the development environment for the front-end application by setting up Vite with React support<br>- It streamlines the build process, enabling rapid development and hot module replacement, which enhances developer productivity<br>- This configuration integrates seamlessly into the overall architecture, ensuring a smooth and efficient workflow for building and deploying the React-based user interface.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/.hintrc'>.hintrc</a></b></td>
					<td style='padding: 8px;'>- Defines linting and validation rules for the front-end development environment, ensuring code quality and consistency across the project<br>- It extends a base configuration tailored for development, with specific adjustments to CSS compatibility hints that optimize styling practices while allowing certain exceptions<br>- This setup supports maintaining a cohesive and reliable front-end codebase aligned with project standards.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the front-end applications configuration, dependencies, and scripts for development, building, and previewing the admin dashboard<br>- Facilitates a modular, React-based interface utilizing UI components, mapping, and data visualization tools to support efficient management and interaction within the overall system architecture<br>- Ensures streamlined development workflows and consistent environment setup for the project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/eslint.config.js'>eslint.config.js</a></b></td>
					<td style='padding: 8px;'>- Defines ESLint configuration for the front-end project, ensuring code quality and consistency across JavaScript and JSX files<br>- Integrates React-specific linting rules and plugins to support best practices in React development, while excluding build artifacts<br>- Facilitates maintainable, error-free code aligned with modern JavaScript standards within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Establishes the foundational HTML structure for the front-end application, setting up the environment for a blood donation management system<br>- It defines the document layout, links essential resources, and initializes the main React component, enabling the user interface to render and interact seamlessly within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides a streamlined setup for developing React applications with Vite, enabling hot module replacement and ESLint integration<br>- It facilitates rapid development and code quality enforcement, serving as the foundational configuration for building modern, efficient React projects within the overall architecture<br>- This setup ensures a smooth development experience while maintaining code standards.</td>
				</tr>
			</table>
			<!-- src Submodule -->
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ Front-End.src</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/App.jsx'>App.jsx</a></b></td>
							<td style='padding: 8px;'>- Provides the main user interface for the Blood Donation application, enabling users to interact with core features<br>- Serves as the entry point for the front-end, displaying branding, a dynamic counter, and navigation links to external resources<br>- Integrates React components and state management to facilitate a responsive, user-friendly experience within the overall web architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/main.jsx'>main.jsx</a></b></td>
							<td style='padding: 8px;'>- Sets up the core rendering process for the front-end application, initializing the React root and integrating routing and UI configuration<br>- It ensures the application is properly mounted within the DOM, enabling seamless navigation and consistent styling across the user interface, thereby serving as the foundational entry point for the client-side architecture.</td>
						</tr>
					</table>
					<!-- components Submodule -->
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.components</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/NotificationBellUser.jsx'>NotificationBellUser.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides an interactive notification component that displays the latest alerts to users via a dropdown menu<br>- It fetches, presents, and allows detailed viewing of notifications, enhancing user engagement and awareness within the applications overall architecture<br>- The component integrates with backend services to ensure real-time updates and detailed insights.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/ProtectedRoute.jsx'>ProtectedRoute.jsx</a></b></td>
									<td style='padding: 8px;'>- Implements route protection by verifying user authentication and authorization based on roles stored in local storage<br>- Ensures only authenticated users with appropriate roles can access protected components, redirecting unauthorized or unauthenticated users to the homepage<br>- Integrates seamlessly into the applications routing architecture to enforce access control across protected areas.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/MySlateEditor.jsx'>MySlateEditor.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a rich text editing component integrated into the applications front-end, enabling users to input, modify, and persist formatted content seamlessly<br>- It manages internal state synchronization with external data sources, ensuring real-time updates and consistent rendering within the overall architecture<br>- This component enhances user interaction by offering a flexible, user-friendly editing experience within the larger codebase.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/ReadOnlySlate.jsx'>ReadOnlySlate.jsx</a></b></td>
									<td style='padding: 8px;'>- Render a read-only rich text editor component that displays structured content in a styled, non-editable format<br>- It parses JSON content into a Slate editor state, ensuring proper rendering of formatted text while preventing modifications<br>- This component integrates seamlessly into the overall architecture to present static, well-formatted content within the user interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/SupportModalButton.jsx'>SupportModalButton.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user support interactions by providing a fixed-position button that opens a modal form for submitting support requests<br>- It captures essential contact details and message content, then processes the submission to create support tickets within the system<br>- This component enhances user experience by streamlining access to support and ensuring efficient communication with support teams.</td>
								</tr>
							</table>
							<!-- User Submodule -->
							<details>
								<summary><b>User</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.User</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/User/UserDetail.jsx'>UserDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a comprehensive user detail view within the application, displaying personal information, blood donation history, and blood request requests through an organized tabbed interface<br>- Facilitates data fetching, real-time updates, and navigation, supporting administrative and user management functions in the blood donation system architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Campaign Submodule -->
							<details>
								<summary><b>Campaign</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.Campaign</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Campaign/CampaignDetail.jsx'>CampaignDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a detailed view and management interface for campaign information within the application<br>- Facilitates viewing, editing, and updating campaign details, including status and participant data, while integrating related blood donation requests<br>- Ensures seamless data retrieval and updates, supporting campaign lifecycle management and enhancing administrative control over blood donation campaigns.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Blood Submodule -->
							<details>
								<summary><b>Blood</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.Blood</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Blood/BloodDetail.jsx'>BloodDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a comprehensive interface for managing blood group details, including viewing, editing, and updating status<br>- Facilitates the configuration of compatible blood donation and reception relationships, ensuring accurate blood compatibility data<br>- Integrates with backend services to fetch, modify, and maintain blood group information within the overall blood management system.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Blood/BloodForm.jsx'>BloodForm.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a reusable form component for managing blood-related tasks within the application<br>- Facilitates creation and updating of task details such as name, status, admin, and progress, ensuring consistent data entry and user interaction across the project<br>- Integrates seamlessly into the broader front-end architecture to support task management workflows.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- VietnamMap Submodule -->
							<details>
								<summary><b>VietnamMap</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.VietnamMap</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/VietnamMap/index.jsx'>index.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides an interactive map centered on Vietnam, enabling users to search for specific addresses within the country<br>- It dynamically updates the maps focus based on search results, displaying the corresponding location with a marker and popup<br>- This component facilitates location-based interactions, enhancing user experience through real-time geolocation updates within the applications architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- ReceiveBloodAdmin Submodule -->
							<details>
								<summary><b>ReceiveBloodAdmin</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.ReceiveBloodAdmin</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/ReceiveBloodAdmin/ReceiveBloodAdminDetail.jsx'>ReceiveBloodAdminDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- ReceiveBloodAdminDetail.jsxThis component serves as the detailed view for managing blood receipt requests within the blood bank administration system<br>- It provides administrators with a comprehensive interface to review specific blood receipt request details, monitor the status of associated blood units, and perform actions such as updating request statuses or managing blood unit allocations<br>- By integrating data fetching and status mapping, it ensures real-time visibility and control over blood inventory and request workflows, thereby supporting efficient and accurate blood management operations within the overall system architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Register Submodule -->
							<details>
								<summary><b>Register</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.Register</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Register/RegisterForm.jsx'>RegisterForm.jsx</a></b></td>
											<td style='padding: 8px;'>- The <code>RegisterForm.jsx</code> component serves as the primary user interface for new user registration within the application<br>- It facilitates the collection of essential user information, including personal details, blood donation preferences, and geographic location via an interactive map<br>- By integrating form inputs with a map-based location selector, this component ensures users can accurately specify their details and location, which are then processed to create a new user account<br>- Overall, it plays a critical role in onboarding users, enabling the system to tailor services such as blood donation matching based on user data and geographic positioning.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Blog Submodule -->
							<details>
								<summary><b>Blog</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.Blog</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Blog/BlogTab.jsx'>BlogTab.jsx</a></b></td>
											<td style='padding: 8px;'>- Manages the blog administration interface by displaying, creating, and deleting blog posts within the application<br>- Facilitates content management through a user-friendly table and modal form, integrating rich text editing and image uploads<br>- Ensures seamless interaction with backend services for data retrieval and updates, supporting efficient content oversight in the overall application architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Blog/BlogDetail.jsx'>BlogDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a detailed view and editing interface for individual blog posts within the application<br>- Facilitates data retrieval, display, and updates of blog content, categories, and metadata, enabling users to review comprehensive post details or modify content seamlessly<br>- Integrates rich text editing and category selection to support content management workflows in the overall architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Blog/BlogCategoryDetail.jsx'>BlogCategoryDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a detailed interface for viewing and editing blog category information within the application<br>- Facilitates data retrieval, display, and updates of category details, supporting seamless navigation and user interaction<br>- Integrates with backend services to ensure data consistency and offers an intuitive experience for managing blog categories in the overall content management architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Blog/BlogCategoryTab.jsx'>BlogCategoryTab.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides an interface for managing blog categories within the admin dashboard, enabling users to view, create, and navigate through blog categories<br>- Facilitates efficient content organization by allowing category addition and detailed inspection, integrating with backend services to fetch and update category data, thereby supporting the overall content management architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Login Submodule -->
							<details>
								<summary><b>Login</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.Login</b></code>
									<!-- AppHeader Submodule -->
									<details>
										<summary><b>AppHeader</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ Front-End.src.components.Login.AppHeader</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Login/AppHeader/AppHeader.jsx'>AppHeader.jsx</a></b></td>
													<td style='padding: 8px;'>- Defines the header component for the Blood Bank Management Systems front-end interface, providing consistent branding and navigation across pages<br>- It displays the system title and a home icon, facilitating user orientation and easy access to the main page within the applications overall architecture.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- Card Submodule -->
									<details>
										<summary><b>Card</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ Front-End.src.components.Login.Card</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Login/Card/LoginCard.jsx'>LoginCard.jsx</a></b></td>
													<td style='padding: 8px;'>- Implements the user login interface, facilitating authentication by capturing credentials and managing session tokens<br>- It directs users to role-specific dashboards upon successful login, integrating seamlessly with the overall application architecture to ensure secure access control and user experience consistency across the platform.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- BloodDonationRequest Submodule -->
							<details>
								<summary><b>BloodDonationRequest</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.BloodDonationRequest</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/BloodDonationRequest/BloodDonationRequestDetail.jsx'>BloodDonationRequestDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- The <code>BloodDonationRequestDetail.jsx</code> component serves as a detailed view for individual blood donation requests within the application<br>- It enables users to review comprehensive information about a specific request, including its status and relevant details<br>- Additionally, the component provides functionality for authorized users to approve, reject, or mark the request as completed, facilitating efficient management of blood donation workflows<br>- This component integrates seamlessly into the broader system by interacting with backend services to fetch request data and update statuses, supporting the applications goal of streamlining blood donation processes and ensuring transparent request handling.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- layout Submodule -->
					<details>
						<summary><b>layout</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.layout</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/layout/MainLayoutUser.jsx'>MainLayoutUser.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines the main user layout for the application, orchestrating navigation, header, footer, and responsive menu components<br>- Facilitates seamless user experience by managing routing, user account options, notifications, and mobile accessibility within the overall architecture<br>- Serves as the central structural framework for authenticated user interactions and consistent UI presentation across the platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/layout/GuestLayout.jsx'>GuestLayout.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines the layout structure for guest users, providing a consistent interface with navigation, branding, and footer information<br>- Facilitates user navigation across main pages such as home, about, contact, login, and registration, while maintaining branding and essential contact details<br>- Serves as the foundational template for all pages accessible to non-authenticated visitors within the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/layout/MainLayout.jsx'>MainLayout.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines the main layout structure for the applications user interface, managing role-based navigation and user information display<br>- Facilitates consistent page structure with sidebar menus, headers, content areas, and footers, enabling seamless navigation across different system modules for administrators and employees within the blood donation management platform.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- router Submodule -->
					<details>
						<summary><b>router</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.router</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/router/index.jsx'>index.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines the applications client-side routing architecture, orchestrating navigation across guest, user, employee, and admin interfaces<br>- Implements role-based access control, layout management, and route protection to ensure users are directed to appropriate pages based on authentication status and roles, thereby maintaining a cohesive and secure navigation flow within the overall system.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- api Submodule -->
					<details>
						<summary><b>api</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.api</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/api/axiosConfig.js'>axiosConfig.js</a></b></td>
									<td style='padding: 8px;'>- Establishes a centralized Axios instance for API communication, managing request headers, including authentication tokens, and handling response errors<br>- Facilitates seamless interaction with backend services by automating token inclusion and redirecting users to login upon authorization failures, thereby supporting secure and consistent data exchange within the applications architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- variables Submodule -->
					<details>
						<summary><b>variables</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.variables</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/variables/baseUrl.js'>baseUrl.js</a></b></td>
									<td style='padding: 8px;'>- Defines the base URL for image resources used throughout the front-end application, ensuring consistent access to images across different environments<br>- It centralizes configuration for image hosting, facilitating seamless switching between local development and production servers, thereby supporting the overall architectures flexibility and maintainability in managing static assets.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- services Submodule -->
					<details>
						<summary><b>services</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.services</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/supportService.js'>supportService.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates interaction with support ticket data by providing functions to retrieve, view details, and update the status of support tickets<br>- Integrates seamlessly with the API layer to support support management workflows within the application, ensuring efficient handling and real-time updates of support requests across the platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/userService.js'>userService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core user management functionalities within the application, enabling retrieval, updating, and deletion of user data, as well as handling user-specific blood donation and reception histories<br>- Facilitates administrative operations such as creating employees and fetching nearby users, supporting seamless user data interactions and maintaining the integrity of user-related workflows across the platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/bloodReceiveRequestService.js'>bloodReceiveRequestService.js</a></b></td>
									<td style='padding: 8px;'>- Provides an abstraction layer for managing blood receive requests within the application<br>- Facilitates retrieval, creation, updating, and cancellation of blood receive requests through API interactions, supporting seamless integration between the front-end interface and backend services<br>- This service ensures consistent data handling and simplifies communication with the blood request management system in the overall architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/receiveBloodAdminService.js'>receiveBloodAdminService.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates management of blood receive requests within the administrative system by providing functions to retrieve request lists, view detailed information, update request statuses, and access related blood unit data<br>- Supports seamless coordination between blood requests and inventory, ensuring efficient tracking and processing of blood donations and allocations across the platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/bloodWarehouseService.js'>bloodWarehouseService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core services for managing blood units within the warehouse, including retrieving pending units requiring testing, marking units as tested, and canceling tests<br>- These functions facilitate seamless interaction with the backend API, supporting the overall blood inventory workflow and ensuring accurate tracking of blood unit statuses in the system.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/notificationService.js'>notificationService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core functionalities for managing notifications within the application, including retrieving, creating, updating, and deleting notifications via API endpoints<br>- Facilitates seamless communication of alerts and updates to users, supporting both active and detailed notification data handling<br>- Integrates with the backend API to ensure real-time, efficient notification management across the front-end architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/blogCategoryService.js'>blogCategoryService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core functionalities for managing blog categories within the front-end architecture, enabling retrieval, creation, detail fetching, and updating of categories through API interactions<br>- Facilitates seamless integration between the user interface and backend services, supporting dynamic content management and ensuring consistency across the blog management workflow.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/blogService.js'>blogService.js</a></b></td>
									<td style='padding: 8px;'>- Provides an abstraction layer for managing blog-related data interactions within the application<br>- Facilitates fetching, creating, updating, and deleting blog entries through API calls, supporting seamless integration between the front-end interface and backend services<br>- Enhances maintainability and consistency in handling blog content across the project architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/campaignService.js'>campaignService.js</a></b></td>
									<td style='padding: 8px;'>- Provides an interface for managing blood donation campaigns by enabling retrieval, creation, and updating of campaign data<br>- Facilitates seamless interaction with backend APIs to support campaign listing, detailed views, and upcoming event filtering, thereby integrating campaign management functionalities into the front-end architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/unitBloodService.js'>unitBloodService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core services for managing blood unit warehouses, enabling retrieval of warehouse lists, and facilitating actions such as canceling and confirming testing status<br>- These functions support the broader system by ensuring efficient handling and status updates of blood inventory, integral to the applications blood management workflow.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/bloodService.js'>bloodService.js</a></b></td>
									<td style='padding: 8px;'>- Provides an API interface for managing blood data and blood donation requests within the application<br>- Facilitates CRUD operations for blood records, handles donation request workflows, and manages blood compatibility mappings, supporting seamless integration between front-end components and backend services in the blood donation system.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/authService.js'>authService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core authentication and support ticket functionalities by interfacing with backend API endpoints<br>- Facilitates user login, registration, and support request creation, serving as a centralized service layer that enables seamless user management and support workflows within the front-end architecture<br>- Ensures consistent communication with server-side authentication and support systems across the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/donorService.js'>donorService.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates communication between the front-end application and backend donor management APIs, enabling seamless retrieval, creation, updating, and deletion of donor data<br>- Integrates core donor-related functionalities into the overall architecture, supporting efficient data handling and ensuring consistent interactions across the donor management module within the front-end ecosystem.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/dashboardService.js'>dashboardService.js</a></b></td>
									<td style='padding: 8px;'>- Provides an interface to retrieve dashboard analysis data from the backend API, enabling the front-end to display insights and metrics<br>- It facilitates seamless data fetching for dashboard components, supporting the overall architecture of data-driven visualization and user engagement within the application<br>- This service ensures efficient communication between the front-end and server for analytical content.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/donationService.js'>donationService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core functionalities for managing blood donation requests within the application<br>- Facilitates creating, retrieving, updating, and canceling donation requests, enabling seamless interaction with the backend API<br>- Integrates into the front-end architecture to support user actions related to blood donation processes, ensuring efficient communication between the user interface and server-side data management.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- pages Submodule -->
					<details>
						<summary><b>pages</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.pages</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/NotificationManager.jsx'>NotificationManager.jsx</a></b></td>
									<td style='padding: 8px;'>- The <code>NotificationManager.jsx</code> component serves as the central interface for managing notifications within the application<br>- It provides functionalities to view, search, create, update, and delete notifications, facilitating effective communication management across the platform<br>- Positioned within the front-end architecture, this component interacts with backend services to fetch and manipulate notification data, ensuring real-time updates and seamless user interactions<br>- Overall, it plays a crucial role in maintaining an organized and accessible notification system, supporting the applications goal of delivering timely information to users.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/Donors.jsx'>Donors.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates management of blood donors by displaying a dynamic table of donor information and enabling the addition of new donors through a modal form<br>- Integrates user interactions with data updates, supporting efficient donor record keeping within the front-end architecture of the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/BloodReceiveRequestManager.jsx'>BloodReceiveRequestManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides an interface for managing blood receive requests, enabling users to view, filter by status, and navigate through paginated data<br>- Facilitates efficient oversight of request statuses, with options to access detailed information, supporting streamlined blood donation operations within the broader healthcare management system.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/CampaignManager.jsx'>CampaignManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Manages the display and administration of blood donation campaigns, including listing, filtering by status, and creating new campaigns through a user-friendly interface<br>- Facilitates navigation to detailed views, handles campaign status updates based on dates, and ensures seamless data fetching and form submission within the campaign management architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/UserManager.jsx'>UserManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a comprehensive user management interface within the admin dashboard, enabling viewing, filtering, and managing user profiles<br>- Facilitates adding new employees, viewing detailed user information, and deleting users, thereby supporting efficient administration and maintenance of user data across the platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/SupportManager.jsx'>SupportManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a comprehensive interface for managing support tickets within the application<br>- Enables viewing, searching, filtering, and updating ticket statuses, along with detailed insights into each request and its processing history<br>- Integrates with backend services to ensure real-time data synchronization, supporting efficient support team operations and enhancing user support experience.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/Register.jsx'>Register.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides the registration interface for new users, integrating the registration form within a visually engaging background<br>- It ensures a user-friendly entry point into the application, maintaining consistent styling and layout across the onboarding process<br>- This component is essential for facilitating user onboarding and connecting new users to the broader system architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/Login.jsx'>Login.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides the login page interface, serving as the entry point for user authentication within the application<br>- It displays a visually engaging background with a centered login card, facilitating user access to the system<br>- This component integrates visual layout and styling to create an inviting and accessible login experience, forming a crucial part of the user onboarding flow in the overall architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/BloodWarehouse.jsx'>BloodWarehouse.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides an interface for managing blood units pending testing within the blood bank system<br>- Enables users to search, review, and update the status of blood donations, including marking units as tested or canceling them<br>- Integrates with backend services to ensure real-time data updates, supporting efficient blood inventory management and quality control workflows.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/Campaigns.jsx'>Campaigns.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines the Campaigns page within the front-end application, serving as a placeholder for future features related to blood donation campaigns<br>- It integrates a visual card component to maintain consistent UI structure and prepares the groundwork for upcoming campaign management functionalities within the overall project architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/Dashboard.jsx'>Dashboard.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides an overview dashboard displaying key metrics and visualizations related to blood donation management<br>- It aggregates data such as blood requests, inventory, personnel, and activities, presenting them through informative cards and a bar chart for quick insights<br>- This component facilitates real-time monitoring and analysis of critical operational statistics within the broader application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/BloodManager.jsx'>BloodManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a comprehensive interface for managing blood groups, enabling users to view, add, and delete blood types efficiently<br>- Integrates data fetching, form handling, and user interactions within a structured layout, supporting seamless administration of blood group records and ensuring real-time updates in the overall healthcare management system.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/BloodDonationRequestManager.jsx'>BloodDonationRequestManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a comprehensive interface for managing blood donation requests, enabling filtering by status, viewing detailed information, and handling pagination<br>- It integrates with backend services to fetch and display real-time data, supporting efficient oversight of donation requests within the broader healthcare or blood bank system architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/BlogManager.jsx'>BlogManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a user interface for managing blog content by organizing blog categories and individual blog posts within a tabbed layout<br>- Integrates seamlessly into the front-end architecture, enabling administrators to efficiently navigate and oversee blog-related data, thereby supporting content management workflows within the overall application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/BloodUnitManager.jsx'>BloodUnitManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides an interface for managing blood units within the warehouse, enabling users to view, filter, and update blood unit statuses<br>- Facilitates actions such as canceling units and recording test results, ensuring accurate tracking of blood inventory and status updates in the overall blood management system.</td>
								</tr>
							</table>
							<!-- ForUser Submodule -->
							<details>
								<summary><b>ForUser</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.pages.ForUser</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/CampaignDetail.jsx'>CampaignDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- The <code>CampaignDetail.jsx</code> file serves as the primary interface for displaying detailed information about a specific blood donation campaign within the front-end architecture<br>- It enables users to view campaign specifics, track donation statuses, and perform actions such as donating blood<br>- This component integrates with backend services to fetch campaign data and handle donation requests, thereby facilitating user engagement and interaction with ongoing campaigns<br>- Overall, it plays a crucial role in connecting users to campaign activities, supporting the applications goal of promoting blood donation efforts.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/ProfileDetail.jsx'>ProfileDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- Displays detailed user profile information within the front-end application, enabling users to view and manage their personal data<br>- Integrates profile editing and password change functionalities, presenting data in a structured, visually appealing format aligned with the overall architecture<br>- Supports user engagement by providing quick access to profile updates and status indicators.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/ListRequest.jsx'>ListRequest.jsx</a></b></td>
											<td style='padding: 8px;'>- Facilitates user interaction with blood donation requests by displaying, filtering, and managing requests through a responsive interface<br>- Enables viewing, editing, and canceling donation requests, ensuring real-time updates and seamless user experience within the broader donation management system<br>- Supports efficient tracking and modification of donation statuses, contributing to the platforms overall blood donation workflow.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/NearMe.jsx'>NearMe.jsx</a></b></td>
											<td style='padding: 8px;'>- Displays a list of nearby users, fetching real-time data to facilitate social or community interactions<br>- It presents user profiles with key details such as name, contact info, gender, blood type, distance, and health history, enhancing user engagement by providing relevant local connections within the applications broader architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/BlogPage.jsx'>BlogPage.jsx</a></b></td>
											<td style='padding: 8px;'>- Displays a user-facing blog listing page with search, pagination, and visual summaries of articles<br>- Facilitates browsing, filtering, and navigation to detailed blog views, supporting knowledge sharing within the platforms content ecosystem<br>- Integrates seamlessly with backend services to fetch and render blog data dynamically, enhancing user engagement and content discoverability.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/ProfileEdit.jsx'>ProfileEdit.jsx</a></b></td>
											<td style='padding: 8px;'>- Facilitates user profile editing by providing a comprehensive form for updating personal information, including name, contact details, birth date, gender, blood type, and health history<br>- Integrates with backend services to fetch blood group options and submit profile updates, ensuring data consistency and a seamless user experience within the overall application architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/Dashboard.jsx'>Dashboard.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a user dashboard showcasing upcoming blood donation campaigns, educational resources, and community engagement prompts<br>- It facilitates browsing, viewing details, and registering for campaigns, supporting the platforms goal of promoting blood donation awareness and participation within the broader healthcare and community support architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/BlogDetailUser.jsx'>BlogDetailUser.jsx</a></b></td>
											<td style='padding: 8px;'>- Displays detailed view of a user-facing blog post, including content, category, publication date, and cover image<br>- Facilitates navigation back to the previous page and dynamically fetches blog data based on URL parameters<br>- Integrates with the overall architecture to provide an engaging, informative presentation of individual blog entries within the front-end application.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/ChangePassword.jsx'>ChangePassword.jsx</a></b></td>
											<td style='padding: 8px;'>- Facilitates user password updates within the application by providing a secure, user-friendly interface for inputting current and new passwords<br>- Integrates with backend services to validate and process password changes, ensuring seamless account security management<br>- This component is a key part of the user account management architecture, enhancing user autonomy and security compliance.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/ReceiveBlood.jsx'>ReceiveBlood.jsx</a></b></td>
											<td style='padding: 8px;'>- ReceiveBlood.jsxThis component serves as the primary interface for managing blood receipt requests within the application<br>- It enables users to create, view, update, and delete blood receipt requests, facilitating efficient tracking and handling of blood donations<br>- By integrating with backend services, it ensures real-time data synchronization and provides a user-friendly interface for managing blood receipt workflows, contributing to the overall blood management system architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- ForGuest Submodule -->
							<details>
								<summary><b>ForGuest</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.pages.ForGuest</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForGuest/Home.jsx'>Home.jsx</a></b></td>
											<td style='padding: 8px;'>- Defines the main landing page for guest users, orchestrating the presentation of key sections such as hero, features, benefits, blood types, and call-to-action prompts<br>- It serves as the central hub for engaging visitors, providing an overview of the platform’s offerings and encouraging user interaction within the front-end architecture.</td>
										</tr>
									</table>
									<!-- sections Submodule -->
									<details>
										<summary><b>sections</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ Front-End.src.pages.ForGuest.sections</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForGuest/sections/ProcessTimelineSection.jsx'>ProcessTimelineSection.jsx</a></b></td>
													<td style='padding: 8px;'>- Provides a visual overview of the blood donation process, guiding users through key steps from registration to receiving certification<br>- It enhances user engagement by clearly illustrating the simplified journey, fostering trust and encouraging participation within the overall system architecture focused on facilitating safe and efficient blood donation experiences.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForGuest/sections/HeroSection.jsx'>HeroSection.jsx</a></b></td>
													<td style='padding: 8px;'>- Defines the hero section of the landing page, serving as an engaging introduction to the blood donation platform<br>- It highlights the platform’s mission to connect donors and recipients, encouraging user registration and exploration of campaigns through prominent calls-to-action<br>- This component plays a key role in capturing visitors attention and guiding them into the platform’s core functionalities.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForGuest/sections/ServicesSection.jsx'>ServicesSection.jsx</a></b></td>
													<td style='padding: 8px;'>- Provides a visually engaging section highlighting key blood donation services and community engagement opportunities<br>- It showcases features such as scheduling blood drives, locating donation centers, tracking donation history, and joining a volunteer community, thereby enhancing user interaction and promoting active participation in blood donation initiatives within the overall platform architecture.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForGuest/sections/BenefitsSection.jsx'>BenefitsSection.jsx</a></b></td>
													<td style='padding: 8px;'>- Highlights the key benefits of participating in the Vietnamese Community Blood Donation program, emphasizing safety, rapid response, community engagement, and humanitarian impact<br>- Serves as a compelling section to inform and motivate users by showcasing the core values and advantages of the platform, thereby fostering trust and encouraging participation within the overall web application architecture.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForGuest/sections/CallToActionSection.jsx'>CallToActionSection.jsx</a></b></td>
													<td style='padding: 8px;'>- Provides an engaging call-to-action section encouraging users to participate in blood donation campaigns<br>- It highlights upcoming events, promotes community involvement, and directs users toward login for participation<br>- This component plays a key role in fostering user engagement and awareness within the overall platform architecture focused on community-driven blood donation initiatives.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForGuest/sections/FeaturesSection.jsx'>FeaturesSection.jsx</a></b></td>
													<td style='padding: 8px;'>- Defines the FeaturesSection component, showcasing key platform functionalities such as blood donation management, emergency blood requests, and community engagement<br>- It visually highlights how the platform connects users to facilitate blood donation activities, supporting the overall architecture by emphasizing user-centric features that promote community participation and streamline blood donation processes.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForGuest/sections/BloodTypesSection.jsx'>BloodTypesSection.jsx</a></b></td>
													<td style='padding: 8px;'>- Displays comprehensive information about blood types, including their prevalence, compatibility, and characteristics, within a user-friendly interface<br>- Facilitates exploration of detailed blood type data through interactive cards and modals, supporting blood donation and transfusion awareness<br>- Integrates with backend services to fetch dynamic data, enhancing the overall blood bank management system.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- pages Submodule -->
									<details>
										<summary><b>pages</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ Front-End.src.pages.ForGuest.pages</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForGuest/pages/Contact.jsx'>Contact.jsx</a></b></td>
													<td style='padding: 8px;'>- Provides a comprehensive contact interface for users to reach support, submit inquiries, and access essential contact details<br>- Facilitates user engagement through a form, displays operational hours, social media links, and frequently asked questions, thereby enhancing communication and support for partners and donors within the overall platform architecture.</td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForGuest/pages/About.jsx'>About.jsx</a></b></td>
													<td style='padding: 8px;'>- Provides an engaging overview of the organizations mission, values, and vision related to blood donation management<br>- It highlights the platforms role in connecting donors with healthcare facilities, fostering community trust, and promoting a sustainable, innovative blood donation ecosystem in Vietnam<br>- The page aims to inspire user participation through compelling storytelling and calls to action.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** Java
- **Package Manager:** Maven, Npm, Yarn

### Installation

Build Blood-Donation-System from the source and install dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/AnhKhoaa157/Blood-Donation-System
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd Blood-Donation-System
    ```

3. **Install the dependencies:**

**Using [maven](https://maven.apache.org/):**

```sh
❯ mvn install
```
**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```
**Using [yarn](https://yarnpkg.com/):**

```sh
❯ yarn install
```

### Usage

Run the project with:

**Using [maven](https://maven.apache.org/):**

```sh
mvn exec:java
```
**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```
**Using [yarn](https://yarnpkg.com/):**

```sh
yarn start
```

### Testing

Blood-donation-system uses the {__test_framework__} test framework. Run the test suite with:

**Using [maven](https://maven.apache.org/):**

```sh
mvn test
```
**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```
**Using [yarn](https://yarnpkg.com/):**

```sh
yarn test
```

---

## Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## Contributing

- **💬 [Join the Discussions](https://github.com/AnhKhoaa157/Blood-Donation-System/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/AnhKhoaa157/Blood-Donation-System/issues)**: Submit bugs found or log feature requests for the `Blood-Donation-System` project.
- **💡 [Submit Pull Requests](https://github.com/AnhKhoaa157/Blood-Donation-System/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/AnhKhoaa157/Blood-Donation-System
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/AnhKhoaa157/Blood-Donation-System/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=AnhKhoaa157/Blood-Donation-System">
   </a>
</p>
</details>

---

## License

Blood-donation-system is protected under the [LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- Credit `contributors`, `inspiration`, `references`, etc.

<div align="left"><a href="#top">⬆ Return</a></div>

---
