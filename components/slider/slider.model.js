// based on
// https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider
const SliderModel = {
  name: "Slider",
  type: "model",
  config: {
    oninitelement: (model, state, e) => {
      model.update({
        sliderName: "frmwrkSlider",
        sliderMin: "0",
        sliderMax: "100",
        sliderValue: "0",
        sliderStep: "5"
      });

      /**
       * Sniffs for Older Edge or IE,
       * more info here:
       * https://stackoverflow.com/q/31721250/3528132
       */
      function isOlderEdgeOrIE() {
        return (
          window.navigator.userAgent.indexOf("MSIE ") > -1 ||
          !!navigator.userAgent.match(/Trident.*rv\:11\./) ||
          window.navigator.userAgent.indexOf("Edge") > -1
        );
      }

      function valueTotalRatio(value, min, max) {
        return ((value - min) / (max - min)).toFixed(2);
      }

      function getLinearGradientCSS(ratio, leftColor, rightColor) {
        return [
          "-webkit-gradient(",
          "linear, ",
          "left top, ",
          "right top, ",
          "color-stop(" + ratio + ", " + leftColor + "), ",
          "color-stop(" + ratio + ", " + rightColor + ")",
          ")"
        ].join("");
      }

      function updateRangeEl(rangeEl) {
        var ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);

        rangeEl.style.backgroundImage = getLinearGradientCSS(ratio, "var(--fc-dark-gray)", "var(--fc-light-gray)");
      }

      function initRangeEl() {
        var rangeEl = e;

        /**
         * IE/Older Edge FIX
         * On IE/Older Edge the height of the <input type="range" />
         * is the whole element as oposed to Chrome/Moz
         * where the height is applied to the track.
         *
         */
        if (isOlderEdgeOrIE()) {
          rangeEl.style.height = "20px";
        } else {
          updateRangeEl(rangeEl);
          rangeEl.addEventListener("input", function (e) {
            updateRangeEl(e.target);
          });
        }
      }

      initRangeEl();
    },

    onchange: (model, state, e) => {
      model.update({ sliderValue: e.target.value });
    }
  }
};

export default SliderModel;
