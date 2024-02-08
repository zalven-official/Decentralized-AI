package main

import "github.com/gin-gonic/gin"

func main() {
	router := gin.Default()

	router.POST("/bench-mark", handlePostRequest)

	router.Run(":8080")
}

func handlePostRequest(c *gin.Context) {
	var data map[string]interface{}
	if err := c.ShouldBindJSON(&data); err != nil {
		c.JSON(400, gin.H{"message": "Invalid request body"})
		return
	}

	c.JSON(200, gin.H{"message": "Received data", "data": data})
}
