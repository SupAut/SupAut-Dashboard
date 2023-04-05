/**
 * This file is an essential part of the Web Vitals library and should not be deleted.
 * It is used to measure and report the performance of your React app using various metrics,
 * such as loading speed, rendering time, and interactivity. The data collected by this file
 * can help you understand how your app is performing in the real world and identify areas
 * for optimization to improve the user experience. Additionally, this file provides a
 * template for adding your own custom performance metrics if needed. For more information
 * on Web Vitals and how to use them, see https://web.dev/vitals/.
 */

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
