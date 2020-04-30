module.exports = {
  async index(request, response) {
  
      return response.json({
        success: true,
        message: 'Hello World!'
      });
  }
}