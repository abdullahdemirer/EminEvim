using Business.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Business.Concrete
{
    public class ProductManager : IProductService
    {
        IProductDal _productDal;

        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }

        public IResult AddProduct(Product product)
        {
            var catogoryName = product.CategoryName.Trim().ToLower();
            product.ProductName = product.ProductName.Trim();
            product.CategoryName = char.ToUpper(catogoryName[0]) + catogoryName.Substring(1);
            _productDal.AddProduct(product);
            return new SuccessResult("Ürün Eklendi");
        }

        public List<Product> GetAll()
        {
            return _productDal.GetAll();
        }

        public List<string> GetAllCategoryNames()
        {
            return _productDal.GetAllCategories();
        }

      

        public List<Product> GetProductsByCategoryName(string CategoryName)
        {
            var formatedCategoryNames = (char.ToUpper(CategoryName[0]) + CategoryName.Substring(1)).Split('-');
            return _productDal.GetProductsByCategoryName(String.Join(" ",formatedCategoryNames));
        }
    }
}
