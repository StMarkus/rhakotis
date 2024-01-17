
# Rhakotis Services

Rhakotis is a web REST API of services used in the coptic church. Developed by St. Mark Coptic Church Frankfurt.


## Usage

Pass values as query parameters **text**, **font**, and **jimkin**.
All values are mandatory.
```
{{host}}:{{port}}/convert2Unicode?text=<TEXT_2_CONVERT>&font=<FONT_OF_THE_TEXT>&jimkin=<COMBINING_METHOD>
```

### Example
```
.../convert2Unicode?text=;Ele;/con ;/mac ;o Yeoc&font=NEW_ATHANASIUS&jimkin=COMBINE_WITH_CHAR_AFTER
```
### Online Example
[https://rhakotis.onrender.com/](https://rhakotis.onrender.com/convert2Unicode?text=;Ele;/con;/mac;oYeoc&font=NEW_ATHANASIUS&jimkin=COMBINE_WITH_CHAR_AFTER)

### Supported Coptic Non-Unicode Fonts 
  - CS
  - NEW_ATHANASIUS
  - ATHANASIUS
  - AVVA_SHENOUDA
  - AVVA_MARCOS
  - AVVA_BISHOY
  - BISHOP_TADROS
  - SAINT_ABRAHAM
  - ANTONIOUS
  - ANTONIOUS_THIN
  - ANTONIOUSJ
  - ANTONIOUSOL
  - COPTIC
  - COPTICII
  - COPTONEW
  - KOPTOS
  - SAINTGEORGES
  - KYRILLOS
  - KOPTWI3
  - KPTWI3B
  - AVVA_KYRILLOS
  - SAINT_MARINA
  - SPACHMIM
  - MENA1
  - POPE_SHENOUDA_III
  - NOPHER

### Jimkin combining method

| Method | Notes |
| ------ | ------ |
| COMBINE_WITH_CHAR_BEFORE | The charachter before the Jimkin gets combined |
| COMBINE_WITH_CHAR_AFTER | The charachter after the Jimkin gets combined |
| NONE | No combining method |
