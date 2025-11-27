document.addEventListener("DOMContentLoaded", function () {
  const cadStylesheet = document.querySelector(
    'link[href="CAD_Pricing_Table.css"]'
  );
  const usdStylesheet = document.querySelector(
    'link[href="USD_Pricing_Table.css"]'
  );

  document.querySelectorAll(".toggle_btn").forEach((button) => {
    button.addEventListener("click", function () {
      const currency = this.getAttribute("data-currency");

      document.querySelectorAll(".toggle_btn").forEach((btn) => {
        btn.classList.remove("active");
      });
      this.classList.add("active");

      if (currency === "CAD") {
        document.getElementById("pricing_table_wrapper_CAD").style.display =
          "block";
        document.getElementById("pricing_table_wrapper_USD").style.display =
          "none";
        cadStylesheet.disabled = false;
        usdStylesheet.disabled = true;
      } else {
        document.getElementById("pricing_table_wrapper_CAD").style.display =
          "none";
        document.getElementById("pricing_table_wrapper_USD").style.display =
          "block";
        cadStylesheet.disabled = true;
        usdStylesheet.disabled = false;
      }
    });
  });
});
