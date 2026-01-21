---
sidebar_position: 1
---

# Import
Importing the plugins module

You can import this module using

```python
from programing_help_framework import Plugins
```

or

```python
import programing_help_framework.Plugins
```

Or if you use all the modules you can import it using

```python
from programing_help_framework import *
```

To start using the module you have to assign the Configs to a variable

```python
from programing_help_framework import Plugins

plugins = Plugins(plugins_folder="Path to plugins folder, If you don't specify one it will be created in the same directory with name plugins")
```