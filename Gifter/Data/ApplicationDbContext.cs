using DocumentFormat.OpenXml.Presentation;
using Gifter.Models;
using Microsoft.EntityFrameworkCore;
using Comment = Gifter.Models.Comment;

namespace Gifter.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<UserProfile> UserProfile { get; set; }
        public DbSet<Post> Post { get; set; }
        public DbSet<Comment> Comment { get; set; }
       
    }
}
