import TableAppointments from "../components/TableAppointment";

export default function Home() {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <h1>Appointment</h1>
          <TableAppointments />
        </div>
      </section>
    </div>
  );
}
