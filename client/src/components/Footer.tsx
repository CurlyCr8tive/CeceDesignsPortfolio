export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t" data-testid="footer">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-muted-foreground" data-testid="text-copyright">
          © {currentYear} Cherice Heron. Designed with care for accessibility and human connection.
        </p>
      </div>
    </footer>
  );
}
