const trianglePerimeter = triangle =>
    Math.hypot(triangle.a.x - triangle.b.x, triangle.a.y - triangle.b.y) +
    Math.hypot(triangle.a.x - triangle.c.x, triangle.a.y - triangle.c.y) +
    Math.hypot(triangle.b.x - triangle.c.x, triangle.b.y - triangle.c.y)