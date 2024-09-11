import React from 'react'
import styles from "./ChartBar.module.css"

const ChartBar = ({maxPrice , currentPrice , label}) => {

    const fillHeight = (100 * currentPrice) / maxPrice

  return (
    <div className={styles.chartBar} >
      <div className={styles.chartBarInner}>
        <div style={{height: `${fillHeight}%`}} className={styles.chartBarFill}></div>
      </div>
      <p className={styles.chartBarLabel}>{label}</p>
    </div>
  )
}

export default ChartBar
