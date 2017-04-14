# angular-collapse-text
Simple Angular directive that adds the "Read more/less" action to a piece of text.
Here is an example using custom css:

![Show more](/img/more.PNG "Show more")

![Show less](/img/less.PNG "Show less")

## Dependencies

* Angular >= 1.5

## Installation

### Manual installation

Just download this repository to a folder in your project

### Bower

`bower install ArmandoKenneth/angular-collapse-text`

## Usage

After you install the directive using one of the options above, follow these steps:

**1. Add the script tag to your project**

`<script type="text/javascript" src="download/path/angular-collapse-text.min.js"></script>`

Example (if using bower):


`<script type="text/javascript" src="bower_components/angular-collapse-text/angular-collapse-text.min.js"></script>`

**2. Add `ark.collapse-text` to your app modules loader**

`angular.module('yourAngularApp', ['ark.collapse-text']);`

**3. Add the `collapse-text` attribute to an element**

Add the `collapse-text` attribute to the element you want to use as the anchor for the action. For example:

`<p collapse-text></>`

**4. Attributes**

Here is a list of the attributes that this library accepts. Some of them are optional and if no values are provided, a default setting will be used.

Attribute  | Required | Description | Default value
------------- | ------------- | ------------- | -------------
`collapse-text-content="{{text}}"` | Yes | This is the text that will be split into pieces | -
`collapse-text-length`  | No | Indicates the number of characters that will be allowed before breaking the text into pieces and showing the action button | 100
`collapse-text-button-class` | No | Indicates if a custom class should be added to the action button. By default it will add the Bootstrap button styles if it is available | -
`collapse-text-show-text` | No | Use this to show a custom message when there is more to be shown | `Show more`
`collapse-text-hide-text` | No | Use this to show a custom message when there is nothing more to be shown | `Show less`

**Example**

`<p class="my_custom_css_for_the_text" collapse-text collapse-text-length="150" collapse-text-content="{{item.description}}" collapse-text-button-class="btn btn-ghost btn-right" ></p>`


### Next steps

- [x] Add custom show/hide text
- [x] Add custom css to button
- [ ] Add css transitions
- [ ] Add tests
- [ ] Add custom CSS that is not Bootstrap dependant

### Contributing

Feel free to contribute to this library if you found any problem or want to implement a new feature.
