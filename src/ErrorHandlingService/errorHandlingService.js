class ErrorHandlingService {
  static async handleModelError(error) {
    switch (error.name) {
      case "AccessDeniedException":
        console.error("Access Denied: Check your permissions.");
        break;
      case "InternalServerException":
        console.error("Internal Server Error: Retry your request.");
        break;
      case "ModelErrorException":
        console.error(
          "Model Error: An error occurred while processing the model."
        );
        break;
      case "ValidationException":
        console.error("Validation Error: Input validation failed.");
        break;
      default:
        console.error("Error:", error.message);
        break;
    }
  }
}

export default ErrorHandlingService;
