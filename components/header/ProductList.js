import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function ProductList() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link href="/profile">Nail Art</Link>
        </li>
        <li>
          <Link href="profile/orders?tab=1&q=all-orders__">
            Tools & Equipments{" "}
          </Link>
        </li>
        <li>
          <Link href="/profile/messages">Nail Combos</Link>
        </li>
        <li>
          <Link href="/profile/address">50% Off</Link>
        </li>
        <li>
          <Link href="/profile/wishlist">Most Popular</Link>
        </li>
      </ul>
    </div>
  );
}
