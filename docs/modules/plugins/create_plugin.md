---
sidebar_position: 5
---

# Create Plugin
Create a plugin from the code

Creating Plugins from the codes is good for programs with plugin marketplaces - plugin shops, programs with user-created plugins and others

To create a plugin from the code you need to use the `plugins.create_plugin(name='name', description='description', init_function: 'init_function')`

```python
from programing_help_framework import Plugins

plugins = Plugins()

plugins_list = plugins.create_plugin(name='some_plugin', description='Just a test plugin', init_function="init")
```

This will create a plugins folder(if you don't have one) and will create the plugin by this structure

```html
plugins/
├─ some_plugin/
│  ├─ config.yaml
│  ├─ main.py
```

You can always edit the plugin from the `config.yaml` and `main.py` files