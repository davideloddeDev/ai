import './css/footer.css'

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Company Name. All rights reserved.
      </p>
    </footer>
  );
}
