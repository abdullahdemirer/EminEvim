using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Abstract
{
    public interface IProductDal
    {
        List<Product> GetAll();
        void AddProduct(Product product);
        List<Product> GetProductsByCategoryName(string CategoryName);
        List<string> GetAllCategories();
    }
}
