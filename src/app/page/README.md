# Notes

Project Prefix: `pg-pos`

-----


### PageModule
##### [NgModule]

  ```js
    class PagePositionModule

    {
      path: ':page_position',
      component: PageComponent,
      // resolve: position
    }

    {
      providers: [
        { provide: PagePositionConfig },
        { provide: PagePositionService }
      ]
    }
  ```





### Page
##### [Component]
  - A document that has a width equal to the viewport.
  - Has a height that is calculated by the attributes of its child `PagePositionComponent`

  #### Implementation Ideas
    Template:
    ```js
      class Page {
        constructor(private router: Router) {
          // Retrieve PagePositions from somewhere
          // this.setPagePositions();
        }

        // Active page position (resolved by router)
        position: PagePosition;

        // Map of PagePosition id to number to set `scrollTop` to
        scrollPositions: Map<PagePosition.id, number>;

        // How far down the page we're scrolled
        scrollTop: number;

        // subscribe to router.events
        routerNavigationEnded() {
          // get :position_id from router URL
          // retrieve position by ID
          // Set current active position
        }

        // set active position
        setActivePosition(p: PagePosition) {
          // position = p
          // scrollTop = this.scrollPositions.get(p.id);
        }

        private setPagePositions(p: PagePosition[]) {
          // calculate all scrollTop for each PagePosition once on load
          // calculate height for
        }
      }
    ```
    ```html
      <div id="positions-frame">
        <div id="position-container">
          <page-position *ngFor="let p of positions" [position]="p"></page-position>
        </div>
      </div>
    ```





### Page Position Trigger
##### [Directive]
  - Initiates a move to a Page Position
  #### Example Use:
  ```js
    @Directive({
      selector: 'page-position-trigger'
    })
    class PagePositionTrigger {
      @Input('page-position-trigger') position_id: string;
      constructor(private pagePositionSvc: PagePositionService){}

      @HostListener('click')
      _onClick() {
        this.pagePositionSvc.goToPosition(this.position_id);
      }
    }
  ```
  ```html
    <button page-position-trigger="about"></button>
  ```



### Page Position
##### [Interface]
  - `PagePosition`
    - a position within the page that can be scrolled to and displayed
  - `PagePositionConfig`
    - the configuration object that gets injected into the Page

```js
  interface PagePosition {
    id: string,     // 'page', 'about', 'detail'
    height: number, // width is always 100%
    offset: string  // '%' , 'px' or number (defaults to px); + or -
  }

  type PagePositionConfig = {
    order: string[],
    [id: string]: PagePosition
  }
```




### Page Position
##### [Component]
  - Translates a `PagePosition` into an element on the page
  - Width is always 100% of page
  - Accepts a `PagePosition`

  #### Ideas
    ```js
      @Component({
        selector: 'page-position',
        template: `
          <ng-content></ng-content>
        `,
        styles: [`
          :host {
            position: relative;
            width: 100%;
          }
        `]
      }) class PagePositionComponent {

        @Input() position: PagePosition;

        @HostBinding('style.top')
        get top(): number {
          return this.position.offset;
        }

        @HostBinding('style.height.px')
        get height(): number {
          return this.position.height;
        }
      }
    ```

  #### Example Use:
    ```html
      <page-position id="about"></page-position>
    ```





### Page Position
##### [Service]
  - Maintains state of the page and how that is displayed on the current device's screen
  - Communicates with Page Position Triggers
    - listens for signals from triggers on where to go
      ! probably just method calls
  ! Angular Router
    ! service listens to url?
    - Use angular router feature to manage Page Positions as much as possible
    - '/about' goes to the page-position with id `'about'`
    - '/detail/:pano_id' goes to detail position and displays Pano with id `:pano_id`

  - Sends page its information:
    - scroll position
    - width
    - height
    - position information for each PagePosition

  #### Ideas
    ```js
      class PagePositionService {

        constructor(
          private router: Router,
          private positions: PagePosition[] // injected config object
        ) {}

        goToPosition(pos_id: string) {
          this.router.navigate(pos_id);
        }

        getPositionById(pos_id: string) {
          // return PagePosition
        }
      }
    ```
