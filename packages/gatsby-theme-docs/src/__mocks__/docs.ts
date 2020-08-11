export const docs = [
  {
    sections: [
      {
        body:
          'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _display = "\\nexport const DemoVideo = () => {\\n  const { videoRef, mute, setMute } = useVideoControl();\\n  return (\\n    <Video.Stage\\n      headline=\\"Healing Flowers\\"\\n      tag=\\"h1\\"\\n      muted={mute}\\n      handleClick={() => setMute(!mute)}\\n      copy=\\"Sustainable surf and yoga collection in collaboration with @facingblankpages\\">\\n      <Video.Media\\n        controls={false}\\n        autoPlay={true}\\n        loop={true}\\n        muted={mute}\\n        ref={videoRef}\\n        preload=\\"auto\\"\\n        sources={[\\n          {\\n            id: \'first-demo-video-mp4\',\\n            src: \'/woodlike-sustainable-swimwear-healing-flowers-large.mp4\',\\n            type: \'video/mp4\',\\n          },\\n          {\\n            id: \'first-demo-video-web\',\\n            src: \'/woodlike-sustainable-swimwear-healing-flowers-large.webm\',\\n            type: \'video/webm\',\\n          },\\n        ]}\\n      />\\n    </Video.Stage>\\n  );\\n};\\n";\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _display: _display\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h1", null, "Code"), mdx("h2", null, "The Prism highlighter component for React."), mdx("p", null, "Introduction text for the"), mdx("p", null, "padding: (theme: Theme) => ", mdx("inlineCode", {\n    parentName: "p"\n  }, "${theme.space[6]}px ${theme.space[4]}px"), ","));\n}\n;\nMDXContent.isMDXComponent = true;',
        display:
          "\nexport const DemoVideo = () => {\n  const { videoRef, mute, setMute } = useVideoControl();\n  return (\n    <Video.Stage\n      headline=\"Healing Flowers\"\n      tag=\"h1\"\n      muted={mute}\n      handleClick={() => setMute(!mute)}\n      copy=\"Sustainable surf and yoga collection in collaboration with @facingblankpages\">\n      <Video.Media\n        controls={false}\n        autoPlay={true}\n        loop={true}\n        muted={mute}\n        ref={videoRef}\n        preload=\"auto\"\n        sources={[\n          {\n            id: 'first-demo-video-mp4',\n            src: '/woodlike-sustainable-swimwear-healing-flowers-large.mp4',\n            type: 'video/mp4',\n          },\n          {\n            id: 'first-demo-video-web',\n            src: '/woodlike-sustainable-swimwear-healing-flowers-large.webm',\n            type: 'video/webm',\n          },\n        ]}\n      />\n    </Video.Stage>\n  );\n};\n\n",
        id: 'ea635c05-e652-3e38-b0a2-ef95e50c51a3',
      },
    ],
    frontmatter: {
      menu: 'Components',
      name: 'Code',
      title: null,
    },
    id: 'bdea71d9-d22e-3dba-a23b-73336abdc559',
    name: 'Code',
    children: [],
    internal: {
      type: 'Doc',
      contentDigest:
        '340f463033e0fd5ddeabb922df4d4f1b5747494d0f5ed9894f13b6e13ca831f5',
      counter: 40,
      owner: 'default-site-plugin',
    },
    parent: undefined,
  },
  {
    docs: [
      {
        body:
          'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _display = "\\n<Heading as=\\"h2\\" size=\\"xxl\\">\\n  Healing Flowers Collection\\n</Heading>\\n<Heading as=\\"h2\\" size=\\"xxl\\" family=\\"secondary\\">\\n  Healing Flowers Collection\\n</Heading>\\n<Heading as=\\"h2\\" size=\\"xxl\\" family=\\"campaign\\">\\n  Healing Flowers Collection\\n</Heading>\\n";\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _display: _display\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "Heading Families"), mdx("p", null, "Covering three families as defined in the theme ", mdx("inlineCode", {\n    parentName: "p"\n  }, "heading"), " props."), mdx("ul", null, mdx("li", {\n    parentName: "ul"\n  }, mdx("strong", {\n    parentName: "li"\n  }, "display")), mdx("li", {\n    parentName: "ul"\n  }, mdx("strong", {\n    parentName: "li"\n  }, "secondary")), mdx("li", {\n    parentName: "ul"\n  }, mdx("strong", {\n    parentName: "li"\n  }, "campaign"))), mdx("h3", null, "Examples"), mdx(Heading, {\n    as: "h2",\n    size: "xxl",\n    mdxType: "Heading"\n  }, "Healing Flowers Collection"), mdx(Heading, {\n    as: "h2",\n    size: "xxl",\n    family: "secondary",\n    mdxType: "Heading"\n  }, "Healing Flowers Collection"), mdx(Heading, {\n    as: "h2",\n    size: "xxl",\n    family: "campaign",\n    mdxType: "Heading"\n  }, "Healing Flowers Collection"));\n}\n;\nMDXContent.isMDXComponent = true;',
        display:
          '\n<Heading as="h2" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xxl" family="secondary">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xxl" family="campaign">\n  Healing Flowers Collection\n</Heading>\n\n',
        id: 'fa3aed41-a6e4-3659-b703-1d5fe11e40ef',
      },
      {
        body:
          'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _display = "\\n<Heading as=\\"h2\\" size=\\"xxl\\" inverted>\\n    Healing Flowers Collection\\n</Heading>\\n<Heading as=\\"h2\\" size=\\"xxl\\" family=\\"secondary\\" inverted>\\n  Healing Flowers Collection\\n</Heading>\\n<Heading as=\\"h2\\" size=\\"xxl\\" family=\\"campaign\\" inverted>\\n  Healing Flowers Collection\\n</Heading>\\n";\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _display: _display\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "Heading Inverted"), mdx("h3", null, "Example"), mdx(Box, {\n    bg: "corals",\n    p: 3,\n    mdxType: "Box"\n  }, mdx(Heading, {\n    as: "h2",\n    size: "xxl",\n    inverted: true,\n    mdxType: "Heading"\n  }, "Healing Flowers Collection"), mdx(Heading, {\n    as: "h2",\n    size: "xxl",\n    family: "secondary",\n    inverted: true,\n    mdxType: "Heading"\n  }, "Healing Flowers Collection"), mdx(Heading, {\n    as: "h2",\n    size: "xxl",\n    family: "campaign",\n    inverted: true,\n    mdxType: "Heading"\n  }, "Healing Flowers Collection")), mdx("p", null, ";"));\n}\n;\nMDXContent.isMDXComponent = true;',
        display:
          '\n<Heading as="h2" size="xxl" inverted>\n    Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xxl" family="secondary" inverted>\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xxl" family="campaign" inverted>\n  Healing Flowers Collection\n</Heading>\n',
        id: 'ff6fca2b-6df9-37fc-9fc7-8bfdc4200c6b',
      },
      {
        body:
          'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _display = "\\n<Heading as=\\"h1\\" size=\\"xxl\\">\\n  Healing Flowers Collection\\n</Heading>\\n<Heading as=\\"h2\\" size=\\"xl\\">\\n  Healing Flowers Collection\\n</Heading>\\n<Heading as=\\"h3\\" size=\\"l\\">\\n  Healing Flowers Collection\\n</Heading>\\n<Heading as=\\"h4\\" size=\\"m\\">\\n  Healing Flowers Collection\\n</Heading>\\n<Heading as=\\"h5\\" size=\\"s\\">\\n  Healing Flowers Collection\\n</Heading>\\n<Heading as=\\"h5\\" size=\\"xs\\">\\n  Healing Flowers Collection\\n</Heading>\\n";\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _display: _display\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h1", null, "Headings"), mdx("h2", null, "Heading Sizes"), mdx("p", null, "Covers sizes from ", mdx("strong", {\n    parentName: "p"\n  }, "s"), " to ", mdx("strong", {\n    parentName: "p"\n  }, "xxxl"), ".\\nThe heading component also has a ", mdx("inlineCode", {\n    parentName: "p"\n  }, "tag"), " prop that accepts all six section levels according the spec."), mdx("h3", null, "Examples"), mdx(Heading, {\n    as: "h1",\n    size: "xxl",\n    mdxType: "Heading"\n  }, "Healing Flowers Collection"), mdx(Heading, {\n    as: "h2",\n    size: "xl",\n    mdxType: "Heading"\n  }, "Healing Flowers Collection"), mdx(Heading, {\n    as: "h3",\n    size: "l",\n    mdxType: "Heading"\n  }, "Healing Flowers Collection"), mdx(Heading, {\n    as: "h4",\n    size: "m",\n    mdxType: "Heading"\n  }, "Healing Flowers Collection"), mdx(Heading, {\n    as: "h5",\n    size: "s",\n    mdxType: "Heading"\n  }, "Healing Flowers Collection"), mdx(Heading, {\n    as: "h5",\n    size: "xs",\n    mdxType: "Heading"\n  }, "Healing Flowers Collection"), mdx("p", null, ";"));\n}\n;\nMDXContent.isMDXComponent = true;',
        display:
          '\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n',
        id: 'e202d1d8-196c-3867-8035-d2e84d52ba85',
      },
    ],
    frontmatter: {
      menu: 'Components',
      name: 'Heading',
      title: null,
    },
    id: '95c550b4-6304-3de6-8dd6-2c71692aba67',
    name: 'Heading',
    children: [],
    internal: {
      type: 'Doc',
      contentDigest:
        'b34f17f02ecf0307437429f667421d119aaf1bf819694236efe15c538850445c',
      counter: 40,
      owner: 'default-site-plugin',
    },
    parent: undefined,
  },
  {
    docs: [
      {
        body:
          'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h1", null, "@WDLK Docs"), mdx("p", null, "Discover the guidelines and thought processes behind our APIs and design system approach."), mdx("p", null, "Docs is a comprehensive reference to our React component architecture, guidelines, and signatures. Components are divided into two pillars; UI/design and UX/behavior which constitutes the two major concerns in front-end development. Technically we refer to these two pillars as Components and UX Hooks."), mdx("h2", null, "Motivation"), mdx("p", null, "Our software design desitions are based on many years of experience building ", mdx("strong", {\n    parentName: "p"\n  }, "large scale design systems"), " consumed by multiple product teams. We\'ve recognized that interface design requirements change continually and faster than behavior, on the flip side, user experience needs to be consistent and endure the lifetime of ever-changing interfaces. Closing the gap in a coherent design system."), mdx("h2", null, "Benefits"), mdx("p", null, "Our goal is to provide a composable, scalable and reusable component library that speeds up your web application development without compromising corporate identity coherency. It also enables frictionless change requests by separating concerns into these two pillars. We provide an opinionated implementation that is extensible to your application needs and coherent to a design system guidelines."), mdx("h3", null, "Technology Landscape"), mdx("ul", null, mdx("li", {\n    parentName: "ul"\n  }, "React"), mdx("li", {\n    parentName: "ul"\n  }, "Theme-UI"), mdx("li", {\n    parentName: "ul"\n  }, "Emotion"), mdx("li", {\n    parentName: "ul"\n  }, "Typescript")), mdx("h2", null, "Components"), mdx("p", null, "Are reusable stateless functional components that are coherent to a design system. It uses ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://theme-ui.com/"\n  }), "Theme-UI"), " under the hood to provide a design system constrained development. With this approach, the theme object becomes the heart of a user interface identity without setting constraints on layout and design decisions."), mdx("h2", null, "UX Hooks"), mdx("p", null, "UX Hooks are reusable stateful functions and helpers that provide different types of UX behavior to your React components. It creates state and passes down the UX logic to the children, so you can handle your behavior. It also opens browser relevant imperative APIs directly into React\'s declarative component composition. It provides UXs consistency avoiding the repeated implementation of stateful behavioral patterns within your web application. For more detailed information about Hooks, you can take a look at the ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://reactjs.org/docs/hooks-reference.html"\n  }), "docs"), "."), mdx("h3", null, "Side Note"), mdx("p", null, "You might have noticed that we use the word coherent when we speak about design compliance. Let\'s elaborate a little bit more into that, for example, a company might offer different applications, their looks might be slightly different like different colors and tokens, and yet both of them suggest they belong to one organization. In our opinion, a good design system offers coherency across several applications without compromising a web application\'s extensibility and flexibility."));\n}\n;\nMDXContent.isMDXComponent = true;',
        display: '',
        id: 'cf2b9b2e-8b7b-3789-a699-181b9abdae82',
      },
    ],
    frontmatter: {
      menu: '/',
      name: 'Intro',
      title: null,
    },
    id: '91c2fd9d-d5d0-3a19-8c26-bc7ed4b1abcf',
    name: 'Intro',
    children: [],
    internal: {
      type: 'Doc',
      contentDigest:
        '24601bcaae6e170b381367ec4f4475786c6dbef5e8332f8903779c76d298d304',
      counter: 40,
      owner: 'default-site-plugin',
    },
    parent: undefined,
  },
  {
    docs: [
      {
        body:
          'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nfunction DemoVideo() {\n  var _useVideoControl = useVideoControl(),\n      videoRef = _useVideoControl.videoRef,\n      mute = _useVideoControl.mute,\n      setMute = _useVideoControl.setMute;\n\n  return mdx(Video.Stage, {\n    headline: "Healing Flowers",\n    tag: "h1",\n    muted: mute,\n    handleClick: function handleClick() {\n      return setMute(!mute);\n    },\n    copy: "Sustainable surf and yoga collection in collaboration with @facingblankpages"\n  }, mdx(Video.Media, {\n    controls: false,\n    autoPlay: true,\n    loop: true,\n    muted: mute,\n    ref: videoRef,\n    preload: "auto",\n    sources: [{\n      id: \'first-demo-video-mp4\',\n      src: \'/woodlike-sustainable-swimwear-healing-flowers-large.mp4\',\n      type: \'video/mp4\'\n    }, {\n      id: \'first-demo-video-web\',\n      src: \'/woodlike-sustainable-swimwear-healing-flowers-large.webm\',\n      type: \'video/webm\'\n    }]\n  }));\n}\n\nvar _display = "\\nexport const DemoVideo = () => {\\n  const { videoRef, mute, setMute } = useVideoControl();\\n  return (\\n    <Video.Stage\\n      headline=\\"Healing Flowers\\"\\n      tag=\\"h1\\"\\n      muted={mute}\\n      handleClick={() => setMute(!mute)}\\n      copy=\\"Sustainable surf and yoga collection in collaboration with @facingblankpages\\">\\n      <Video.Media\\n        controls={false}\\n        autoPlay={true}\\n        loop={true}\\n        muted={mute}\\n        ref={videoRef}\\n        preload=\\"auto\\"\\n        sources={[\\n          {\\n            id: \'first-demo-video-mp4\',\\n            src: \'/woodlike-sustainable-swimwear-healing-flowers-large.mp4\',\\n            type: \'video/mp4\',\\n          },\\n          {\\n            id: \'first-demo-video-web\',\\n            src: \'/woodlike-sustainable-swimwear-healing-flowers-large.webm\',\\n            type: \'video/webm\',\\n          },\\n        ]}\\n      />\\n    </Video.Stage>\\n  );\\n};\\n";\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  DemoVideo: DemoVideo,\n  _display: _display\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h1", null, "Video Stage"), mdx("p", null, "Art directing videos on three different devices."), mdx("h2", null, "Fully functional Video Stage Example"), mdx(DemoVideo, {\n    mdxType: "DemoVideo"\n  }), ";");\n}\n;\nMDXContent.isMDXComponent = true;',
        display:
          "\nexport const DemoVideo = () => {\n  const { videoRef, mute, setMute } = useVideoControl();\n  return (\n    <Video.Stage\n      headline=\"Healing Flowers\"\n      tag=\"h1\"\n      muted={mute}\n      handleClick={() => setMute(!mute)}\n      copy=\"Sustainable surf and yoga collection in collaboration with @facingblankpages\">\n      <Video.Media\n        controls={false}\n        autoPlay={true}\n        loop={true}\n        muted={mute}\n        ref={videoRef}\n        preload=\"auto\"\n        sources={[\n          {\n            id: 'first-demo-video-mp4',\n            src: '/woodlike-sustainable-swimwear-healing-flowers-large.mp4',\n            type: 'video/mp4',\n          },\n          {\n            id: 'first-demo-video-web',\n            src: '/woodlike-sustainable-swimwear-healing-flowers-large.webm',\n            type: 'video/webm',\n          },\n        ]}\n      />\n    </Video.Stage>\n  );\n};\n\n",
        id: '36bce905-fce4-3293-9a1c-c200d6559277',
      },
    ],
    frontmatter: {
      menu: 'Components',
      name: 'Video',
      title: 'Video',
    },
    id: '0fcadcee-d4ae-3595-9f51-3bca81e53157',
    name: 'Video',
    children: [],
    internal: {
      type: 'Doc',
      contentDigest:
        'd534be829e32196b4d1e53b67103cf1e376b1d60071857572598c196abfefbc6',
      counter: 40,
      owner: 'default-site-plugin',
    },
    parent: undefined,
  },
  {
    docs: [
      {
        body:
          'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h1", null, "withFocusStyle"), mdx("p", null, "Provide visual focus styles to other components by using the ", mdx("em", {\n    parentName: "p"\n  }, "withFocusStyle"), " higher order component. This hoc does not create any unnecessary HTML elements."), mdx("p", null, "All of the components passed as an argument to the hoc must have a ", mdx("inlineCode", {\n    parentName: "p"\n  }, "isFocused"), " prop interface."));\n}\n;\nMDXContent.isMDXComponent = true;',
        display: '',
        id: 'ab04885c-3185-3668-b6b9-bb6e4652ef87',
      },
    ],
    frontmatter: {
      menu: 'Hocs',
      name: 'With Focus Style',
      title: null,
    },
    id: 'eb4f7a45-17bf-3c31-84d5-1e236e336609',
    name: 'With Focus Style',
    children: [],
    internal: {
      type: 'Doc',
      contentDigest:
        '307e82ed4e38fdb59b9cbe57a283f53bf669899e996f02a399ee0e73b137c07c',
      counter: 40,
      owner: 'default-site-plugin',
    },
    parent: undefined,
  },
];
