using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public List<Product> Get()
        {
            return _productService.GetAll();
        }

        [HttpGet("getProductsByCategoryName")]

        public List<Product> GetProductsByCategoryName(string categoryName)
        {
            return _productService.GetProductsByCategoryName(categoryName);

        }

        [HttpGet("getCategories")]
        public List<string> GetCategories()
        {
            return _productService.GetAllCategoryNames();
        }

        [HttpPost]
        public IActionResult Post(Product product)
        {
           var result = _productService.AddProduct(product);

            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

       
    }
}
