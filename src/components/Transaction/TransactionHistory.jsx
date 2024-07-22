import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.tableTitle}>Type</th>
          <th className={css.tableTitle}>Amount</th>
          <th className={css.tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={css.description}>{item.type}</td>
            <td className={css.description}>{item.amount}</td>
            <td className={css.description}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
