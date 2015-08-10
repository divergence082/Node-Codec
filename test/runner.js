

/**
 * @param {!Array.<!yaa.Step>} cases
 * @param {string} name
 * @param {yaa.Context} opt_context
 * @return {!yaa.Step}
 */
module.exports = function(cases, name, opt_context) {

  /**
   * @param {!yaa.CompleteHandler} complete
   * @param {!yaa.ErrorHandler} cancel
   */
  function test(complete, cancel) {

    /**
     *
     */
    function localComplete() {
      console.info(name + ': OK.');
      complete(0);
    }

    /**
     * @param {*} error
     */
    function localCancel(error) {
      console.error(name + ': FAILED. ' + error);
      cancel(1);
    }

    function run() {
      if (cases.length > 0) {
        cases.shift().call(opt_context || null, run, localCancel);
      } else {
        localComplete();
      }
    }

    run();
  }

  return test;
};
