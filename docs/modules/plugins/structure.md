---
sidebar_position: 2
---

# Structure
The main plugins structure

```html
plugins/
├─ some_plugin/
│  ├─ config.yaml
│  ├─ main.py
```

In the `config.yaml` file is the plugin configuration

```yaml
description: Just a test plugin
init_function: init
name: some_plugin
```

At the `init_function` you should add your init function name from the main.py script

In the `main.py` is the functionality of the plugin

```python
def init():
    # Your code
```

To run the init function from your code you can use

```python
from programing_help_framework import Plugins

plugins = Plugins()

plugins_list = plugins.get_plugins()

plugins_list["plugin name"]["init_function"]()
```