using DataAccess.Abstract;
using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfProductDal : IProductDal
    {
        public void AddProduct(Product product)
        {
            using (EminEvimContext context = new EminEvimContext())
            {
                var addedEntity = context.Entry(product);
                addedEntity.State = EntityState.Added;
                context.SaveChanges();
            }
        }

        public List<Product> GetAll()
        {
            using (EminEvimContext context = new EminEvimContext())
            {
                return context.Set<Product>().ToList();
            }
        }

        public List<string> GetAllCategories()
        {
            using (EminEvimContext context = new EminEvimContext())
            {
                return context.Set<Product>()
                              .Select(x => x.CategoryName)
                              .Distinct()
                              .ToList();
            }
        }

        public List<Product> GetProductsByCategoryName(string CategoryName)
        {
            using (EminEvimContext context = new EminEvimContext())
            {
                return context.Set<Product>()
                              .Where(x => x.CategoryName == CategoryName)
                              .ToList();
            }
        }
    }
}
