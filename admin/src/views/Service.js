import CardServices from "../components/CardService";

export default function Home() {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <h1>Service</h1>
          <CardServices />
        </div>
      </section>
    </div>
  );
}
