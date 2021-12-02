Changelog:
- **1.2.0**
- Fixed behavior issues and introducted control function parameters

- **1.1.6**
- Remove "errorlvl" to improve 90%+ performance in case of false comparison

- **1.1.5**
- Update type checker to constructor checker providing more reliable results
- Boolean comparison from constructor will not be strict due to 100% of false-negatives in that case
- Currently can compare objects of the constructors: Default object, Array, Map, Set, Boolean, String and Function

- **1.1.4**
- Hotfix - Fix recursive call of Map() operation
- Fix false positive when comparing {} with new Map() object

- **1.1.3**
- Hotfix - Fix Map() operation comparation

- **1.1.2**
- Hotfix: Correctly compare the "size" of Map() objects

- **1.1.1**
- Add explicit "Date" prototype comparator in instanceof based operations

- **1.1.0**
- Add comparison possibilities to JavaScript "Set" and "Map" constructor based objects
- Add comparison possibilities to "function" JavaScript primitive type (with limitations - check the code commented note)
- Fix "object" comparation when objects with different values and equal keys were returning true in the comparison
