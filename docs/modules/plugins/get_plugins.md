---
sidebar_position: 3
---

# Get plugins
Get the active plugins

To get the active plugins you should use the `plugins.get_plugins()` function

```python
from programing_help_framework import Plugins

plugins = Plugins()

plugins_list = plugins.get_plugins()
```

With this code `plugins_list` will be

```python
plugins_list = {
    'some_plugin': {
        'init_function': "function object",
        'name': 'some_plugin',
        'description': 'This is just a plugin'
    }
}
```