// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      // jasmine: {
      //   timeoutInterval: 10000 // 在 10000 毫秒内未调用异步回调（由jasmine设置。默认超时间隔）
      // },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    // jasmineHtmlReporter: {
    //   suppressAll: true // removes the duplicated traces
    // },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/MyApp'),
      // subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        {type:'lcovonly'},
        // fixWebpackSourcePaths: true,
        // thresholds: { // 假设你希望代码有最少 80% 的代码覆盖率。 要启用它
        //   statements: 80,
        //   lines: 80,
        //   branches: 80,
        //   functions: 80
        // }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
