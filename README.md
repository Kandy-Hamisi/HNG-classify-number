# **Number Classification API**

This is a **Number Classification API** built with **TypeScript** and **Node.js**. It classifies a given number and returns interesting mathematical properties about it, along with a fun fact fetched from an external API.

---

## **Features**

- **Number Classification**: Determines if a number is prime, perfect, or an Armstrong number.
- **Digit Sum**: Calculates the sum of the digits of the number.
- **Fun Fact**: Fetches a fun fact about the number from the [Numbers API](http://numbersapi.com/).
- **RESTful API**: Provides a simple and easy-to-use RESTful endpoint.
- **Error Handling**: Handles invalid inputs gracefully with appropriate error messages.

---

## **Technologies Used**

- **TypeScript**: For type-safe and scalable code.
- **Node.js**: For the backend runtime.
- **Express.js**: For building the REST API.
- **Axios**: For making HTTP requests to the Numbers API.
- **Vercel**: For deployment and hosting.

---

## **API Endpoint**

### **Classify a Number**
- **Endpoint**: `GET /api/classify-number?number=<number>`
- **Description**: Classifies the given number and returns its mathematical properties and a fun fact.
- **Example Request**: