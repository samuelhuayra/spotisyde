import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) { }

  getName(): string {
    return this.configService.get<string>('NAME', 'Spotisyde');
  }

  getVersion(): string {
    return `v${this.configService.get<string>('VERSION', '1.0')}`;
  }

  getEnvironment(): string {
    return `${this.configService.get<string>('ENVIRONMENT', 'NOT FOUND')}`;
  }

  getHome(): any {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
          .back {background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%25' height='100%25' preserveAspectRatio='xMidYMid' viewBox='0 0 1440 623'%3E%3Cpattern id='lg-0.6925653225122479' patternUnits='userSpaceOnUse' x='0' y='0' width='1440' height='1'%3E%3Cimage xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAABCAIAAACnup5zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAArtJREFUeNqMWGuaxCAIA+9/nD2f7E4VDBC7Mz/6tT4xhICjYj9Sfiai/uzt+32N+Gt5XlLX89z9Csv1nz6daUIanGzQ83mWLE1kWjud+o6tXdwY8+kx0jSZHWc3a+16znE+bQMVhpm/F2w0995ORPp9X1zuLJ7ds0FQYZi64/wI6OsXZxJIGyuOYQAdemSKjOepT6NpIsWwT1eaXmij/xhkYy+7nuFl08ZM27t0WlkGNk03cESHYx22YfQlnmvmNsl5VQcY+1QS3ZuT2TtanOU4rBhPcb1wk4NSjXetoOH6a25Fr6LlJ7Vq2N5ucWX9hvNnun/HZ9isAGScGGcmvA9sucGb3WoO7InxckZLatYDpMosC7kqeMgHlTsBn8Vu4hOO5qoEUiAgFIXz63RKAm0vNj+uQQwJFMoTkhZtBCS/DSIXGfo5n62P09FTqN5NO0nstAGCwXLR3kIMY9gKO6+V3IQLv+Rf2yzX6b5YCmktAAanU7VGiSil+NWvkjXLq017c063Z6NIHwIpg2IYa63gNeZBUpCA3PH0qtdayoLDJXHlKOjwGOhtVeosuabbWTr9LBcPUg5T96FzSbKFIifsTsu8auzIevvi8p0vMCgoZBd+EczziKgoNO94jDIyS2hi6kAyJccMeAq/ZmHyVAwG3n5ZOUR1VwtXSLVTN3Pmkz03i0ZNbbSoey+5DbK5aK20ezzyROklB8W80wG3jlBSy5IYm7I7D1r4XjbwVBsnzXcizdcodNCfCwasP5eIqSsbuGAKL5+sFRJF8Ksa91rRcnYGiAKor7yf18R7ytvV8FbwtLJkGwPSpwpqGS/W8teswngrnN/ur3gNkaPhlu/FwXwcc+oWI5eIyodbI9PSIM/MAkuVll/z49La/w3IwqiFFaV4a7cAaTWqsYpUYYwhyTGBMuY3T/0KMADYEwCvY9g1JQAAAABJRU5ErkJggg==' x='0' y='0' width='1440' height='1'/%3E%3C/pattern%3E%3Cg%3E%3Cpath d='M 0 0 L 0 544.043 Q 120 545.63 240 513.177 T 480 510.005 T 720 494.147 T 960 369.229 T 1200 344.88 T 1440 309.258 L 1440 0 Z' fill='url(%23lg-0.6925653225122479)' opacity='0.4'%3E%3Canimate attributeName='d' dur='14.285714285714285s' repeatCount='indefinite' keyTimes='0;0.333;0.667;1' calcmod='spline' keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1' begin='0s' values='M0 0L 0 530.1920397257893Q 120 512.9442383548567 240 499.6858539429583T 480 515.5090484312108T 720 427.62281376240935T 960 368.0424017732124T 1200 386.5931900869325T 1440 322.89534272695505L 1440 0 Z;M0 0L 0 546.4626471259212Q 120 551.338450516401 240 515.5330892124377T 480 509.04325906393046T 720 505.7655449652251T 960 369.4364559502555T 1200 337.59519996699976T 1440 306.8763785281018L 1440 0 Z;M0 0L 0 606.3232486627049Q 120 514.0115109434552 240 478.19967011523954T 480 481.2836256561215T 720 459.73087794686137T 960 400.2407214761274T 1200 299.4130108326584T 1440 257.95357188933104L 1440 0 Z;M0 0L 0 530.1920397257893Q 120 512.9442383548567 240 499.6858539429583T 480 515.5090484312108T 720 427.62281376240935T 960 368.0424017732124T 1200 386.5931900869325T 1440 322.89534272695505L 1440 0 Z'%3E%3C/animate%3E%3C/path%3E%3Cpath d='M 0 0 L 0 514.578 Q 120 569.847 240 528.109 T 480 479.616 T 720 438.186 T 960 379.81 T 1200 329.461 T 1440 354.971 L 1440 0 Z' fill='url(%23lg-0.6925653225122479)' opacity='0.4'%3E%3Canimate attributeName='d' dur='14.285714285714285s' repeatCount='indefinite' keyTimes='0;0.333;0.667;1' calcmod='spline' keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1' begin='-3.571428571428571s' values='M0 0L 0 576.8876290920832Q 120 604.5358494793605 240 579.3930948560211T 480 526.0904868087846T 720 421.6450644491288T 960 398.22078997610265T 1200 375.07637384504994T 1440 346.1514546193829L 1440 0 Z;M0 0L 0 507.85977217650117Q 120 604.5905679509622 240 567.2766615258133T 480 514.1862937084412T 720 490.0738302280452T 960 408.30899105658716T 1200 298.4092448951002T 1440 338.29897815164964L 1440 0 Z;M0 0L 0 519.0519632026663Q 120 546.7097269165682 240 502.0257873373142T 480 456.5953930963124T 720 403.632536578788T 960 360.83138921938485T 1200 350.13954730157263T 1440 366.0726944262042L 1440 0 Z;M0 0L 0 576.8876290920832Q 120 604.5358494793605 240 579.3930948560211T 480 526.0904868087846T 720 421.6450644491288T 960 398.22078997610265T 1200 375.07637384504994T 1440 346.1514546193829L 1440 0 Z'%3E%3C/animate%3E%3C/path%3E%3Cpath d='M 0 0 L 0 559.035 Q 120 502.191 240 485.989 T 480 519.989 T 720 481.967 T 960 363.844 T 1200 381.788 T 1440 324.447 L 1440 0 Z' fill='url(%23lg-0.6925653225122479)' opacity='0.4'%3E%3Canimate attributeName='d' dur='14.285714285714285s' repeatCount='indefinite' keyTimes='0;0.333;0.667;1' calcmod='spline' keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1' begin='-7.142857142857142s' values='M0 0L 0 576.4088061298806Q 120 496.8030777560072 240 476.3845274812349T 480 527.0052001488904T 720 465.1940501100429T 960 354.92264080483505T 1200 353.48923842146996T 1440 290.41159340823896L 1440 0 Z;M0 0L 0 537.3772654364152Q 120 516.4051285372218 240 489.85487149025386T 480 551.744531000913T 720 462.124552312477T 960 405.37537650110784T 1200 388.282393644408T 1440 311.08058940124715L 1440 0 Z;M0 0L 0 549.6867043424123Q 120 505.09006409905663 240 491.1561251856092T 480 516.2146860501337T 720 490.99170329359555T 960 368.6432171534815T 1200 397.01300914115245T 1440 342.7591709346924L 1440 0 Z;M0 0L 0 576.4088061298806Q 120 496.8030777560072 240 476.3845274812349T 480 527.0052001488904T 720 465.1940501100429T 960 354.92264080483505T 1200 353.48923842146996T 1440 290.41159340823896L 1440 0 Z'%3E%3C/animate%3E%3C/path%3E%3Cpath d='M 0 0 L 0 622.658 Q 120 556.558 240 521.839 T 480 531.729 T 720 430.911 T 960 372.554 T 1200 362.268 T 1440 372.16 L 1440 0 Z' fill='url(%23lg-0.6925653225122479)' opacity='0.4'%3E%3Canimate attributeName='d' dur='14.285714285714285s' repeatCount='indefinite' keyTimes='0;0.333;0.667;1' calcmod='spline' keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1' begin='-10.714285714285714s' values='M0 0L 0 625.7598077815198Q 120 559.6358024915019 240 525.3954637785988T 480 532.3103873007309T 720 432.14817354038337T 960 371.6761230713258T 1200 365.49117711584313T 1440 376.33083083420956L 1440 0 Z;M0 0L 0 594.9138819550594Q 120 529.0330945386493 240 490.0293337316809T 480 526.5333525751984T 720 419.8486244522961T 960 380.4037754274573T 1200 333.4403415942995T 1440 334.85359312822635L 1440 0 Z;M0 0L 0 625.4412909100188Q 120 614.9711075283689 240 583.6740763061835T 480 542.8330073019521T 720 462.91200792972717T 960 424.39829291569913T 1200 425.1615077695078T 1440 381.1254951733782L 1440 0 Z;M0 0L 0 625.7598077815198Q 120 559.6358024915019 240 525.3954637785988T 480 532.3103873007309T 720 432.14817354038337T 960 371.6761230713258T 1200 365.49117711584313T 1440 376.33083083420956L 1440 0 Z'%3E%3C/animate%3E%3C/path%3E%3C/g%3E%3C/svg%3E");}
        </style>
    </head>
    <body style="margin: 0px;">
        <div class="back" style='
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center bottom;
                position: absolute;top: 0;bottom: 0;left: 0;right: 0;'>
            <div style='display: flex;justify-content: center;align-items: center;height: 100%;'>
                <div style='position: fixed;'>
                    <div style='display: flex;'>
                        <h1 style='font-size: 62px;color: #fff;font-family: "Comic Sans MS", cursive, sans-serif;'>
                            ${this.getName()}
                        </h1>
                        <?xml version="1.0" standalone="no"?>
                        <!DOCTYPE svg
                            PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100pt" height="100pt"
                            viewBox="0 0 600.000000 600.000000" preserveAspectRatio="xMidYMid meet" style="margin: 18px;">
                            <g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)" fill="#ffffff"
                                stroke="none">
                                <path d="M2805 5869 c-582 -55 -1122 -273 -1575 -636 -117 -93 -329 -307 -426
                                      -429 -680 -851 -814 -1999 -349 -2971 422 -882 1253 -1478 2244 -1610 174 -23
                                      549 -23 725 0 655 87 1227 368 1686 827 227 227 396 462 535 745 149 302 220
                                      534 271 881 25 167 25 561 0 728 -51 347 -123 581 -271 882 -277 560 -732
                                      1014 -1297 1293 -333 163 -667 256 -1048 291 -132 11 -364 11 -495 -1z m395
                                      -1543 c675 -68 1211 -213 1683 -453 130 -67 177 -97 211 -133 77 -82 96 -202
                                      48 -297 -38 -73 -112 -114 -218 -121 -85 -5 -121 5 -227 65 -543 306 -1469
                                      485 -2300 443 -353 -17 -592 -51 -865 -121 -190 -48 -229 -49 -309 -9 -95 48
                                      -143 124 -143 227 0 98 58 191 148 237 41 21 299 82 462 110 166 28 369 53
                                      550 66 184 13 776 4 960 -14z m-375 -951 c584 -21 1249 -201 1741 -471 138
                                      -76 178 -115 195 -188 22 -98 -32 -194 -136 -242 -89 -42 -99 -39 -325 83
                                      -348 189 -799 321 -1295 379 -204 24 -654 24 -845 1 -176 -22 -369 -59 -503
                                      -97 -181 -51 -276 -34 -342 59 -26 37 -30 51 -30 109 0 83 29 148 83 186 66
                                      46 415 126 707 162 136 17 448 32 550 27 33 -1 123 -5 200 -8z m220 -940 c342
                                      -40 621 -111 895 -227 176 -75 372 -180 422 -226 80 -74 52 -216 -52 -270 -67
                                      -34 -105 -26 -245 51 -304 168 -590 262 -968 319 -121 19 -187 22 -457 22
                                      -197 1 -356 -4 -425 -12 -161 -19 -414 -60 -542 -88 -136 -31 -177 -24 -235
                                      37 -82 86 -69 199 29 263 61 41 451 111 753 135 74 7 155 13 180 15 98 8 522
                                      -4 645 -19z" />
                            </g>
                        </svg>
                    </div>
                    <div style='display: flex;justify-content: center;align-items: center;height: 100%;'>
                        <a href="javascript:window.location.href=window.location.href+'api'"
                            style='opacity: 0.78;background-color: #00ca4c;border-color: #00ca4c;    border-radius: 50px;padding-left: 40px;padding-right: 40px;border-bottom: 2px solid transparent;    color: #fff;display: inline-block;font-weight: 300;text-align: center;white-space: nowrap;vertical-align: middle;user-select: none;border: 1px solid transparent;transition: all .15s ease-in-out;padding-top: 5px;padding-bottom: 5px;text-decoration: none;'>
                            <span
                                style="font-family: Lucida Console;font-size: 20px!important;color: #fff;line-height: 1.5;font-weight: 300;">
                                API DOCUMENTATION ${this.getVersion()}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div
            style="bottom: 50px;position: fixed;right: 0;background: rgba(0,0,0,.3);z-index: 5;border-radius: 8px 0 0 8px;text-align: center;padding-left: 20px;padding-top: 15px;padding-bottom: 15px;padding-right: 20px;font-family: Lucida Console;font-size: 20px!important;color: #fff;line-height: 1.5;font-weight: 300;">
            ${this.getEnvironment()}
        </div>
    </body>
    </html>`;
  }
}
