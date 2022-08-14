using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IProductService
    {
        List<Product> GetAll();
        IResult AddProduct(Product product);
        List<Product> GetProductsByCategoryName(string CategoryName);
        List<string> GetAllCategoryNames();
    }
}
