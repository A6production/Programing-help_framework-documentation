---
sidebar_position: 4
---

# Load Plugins
Loads the plugins

At the first start of the program every plugin is loaded, but if you add a new one while the program is running you should load them

To do this you need to use the `plugins.load_plugins()` function

```python
from programing_help_framework import Plugins

plugins = Plugins()

plugins.load_plugins()
```