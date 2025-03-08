// Import the generated gRPC-Web client stubs and message classes
import {SimpleClient} from './generated/hello_grpc_web_pb';
import {HelloRequest} from './generated/hello_pb';

// Create an instance of the Greeter client
const client = new SimpleClient('http://localhost:8080');

// Function to send a greeting request
function sayHello(name) {
    // Create a new request
    const request = new HelloRequest();
    request.setName(name);

    // Call the sayHello method on the Greeter client
    client.sayHello(request, {}, (err, response) => {
        if (err) {
            console.error('Error:', err.message);
            document.getElementById('output').textContent = 'Error: ' + err.message;
        } else {
            console.log('Greeting:', response.getName());
            document.getElementById('output').textContent = 'Reply ne: ' + response.getName();
        }
    });
}

// Example usage: sending a request when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const name = 'World';
    sayHello(name);
});
