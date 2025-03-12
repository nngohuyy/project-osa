export function generateSlug(title: string): string {
  const slug = title
    .toLowerCase()             // Convert to lowercase
    .replace(/[^\w\s-]/g, '')  // Remove non-word characters except spaces and hyphens
    .trim()                    // Trim spaces
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .slice(0, 100);             // Limit to 100 characters
  return slug;
}