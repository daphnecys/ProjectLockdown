window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3695","name":"dataset_layer.initialization (Initialization)","subtype":"OBJECT","is_user_defined":true,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Project Lockdown","id":"d4"}},{"field":"Schema","value":"dataset_layer"},{"field":"Name","value":"initialization"},{"field":"Type","value":"Object"},{"field":"Title","value":"Initialization"}],"columns":[{"id":"column-33677","object_id":"column-33677","name":"Precedence","name_without_path":"Precedence","description":"FUTURE: Controls precedence system in the application of Inicialization parameters.","is_pk":false,"is_identity":false,"data_type":null,"data_length":null,"is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-33678","object_id":"column-33678","name":"Source","name_without_path":"Source","description":"\"Indicates where is this Initialization object coming from. Options are - Default for DSL - QS forced - User Settings / User History\"","is_pk":false,"is_identity":false,"data_type":null,"data_length":null,"is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-33683","object_id":"column-33683","name":"AllowShowURL","name_without_path":"AllowShowURL","description":"FUTURE: Whether we allow the resulting URL to be shown or not.","is_pk":false,"is_identity":false,"data_type":null,"data_length":null,"is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-33684","object_id":"column-33684","name":"DSL","name_without_path":"DSL","description":"Parameters determining the DSL to be loaded","is_pk":false,"is_identity":false,"data_type":null,"data_length":null,"is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3696","name":"dataset_layer.initialization.dsl","name_show_schema":"dataset_layer.initialization.dsl"}]},{"id":"column-33685","object_id":"column-33685","name":"StatsBox","name_without_path":"StatsBox","description":"","is_pk":false,"is_identity":false,"data_type":null,"data_length":null,"is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-33686","object_id":"column-33686","name":"Map","name_without_path":"Map","description":"Parameters related to the rendering of the map.","is_pk":false,"is_identity":false,"data_type":null,"data_length":null,"is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-33687","object_id":"column-33687","name":"TabMenu","name_without_path":"TabMenu","description":"","is_pk":false,"is_identity":false,"data_type":null,"data_length":null,"is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-33688","object_id":"column-33688","name":"TimeSlider","name_without_path":"TimeSlider","description":"","is_pk":false,"is_identity":false,"data_type":null,"data_length":null,"is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-33689","object_id":"column-33689","name":"UI","name_without_path":"UI","description":"","is_pk":false,"is_identity":false,"data_type":null,"data_length":null,"is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"fk_DSL_Initialization","title":"","description":"","is_user_defined":true,"foreign_table":"dataset_layer.initialization","foreign_table_show_schema":"dataset_layer.initialization","foreign_table_verbose":"dataset_layer.initialization (Initialization)","foreign_table_verbose_show_schema":"dataset_layer.initialization (Initialization)","foreign_table_object_id":"t3695","primary_table":"dataset_layer.initialization.dsl","primary_table_show_schema":"dataset_layer.initialization.dsl","primary_table_verbose":"dataset_layer.initialization.dsl","primary_table_verbose_show_schema":"dataset_layer.initialization.dsl","primary_table_object_id":"t3696","pk_cardinality":"mx","fk_cardinality":"1x","constraints":[{"primary_column_path":null,"primary_column":"DSLUID","foreign_column_path":null,"foreign_column":"DSL"}],"custom_fields":{}},{"name":"fk_Initialization_dataset_layer","title":"","description":"","is_user_defined":true,"foreign_table":"dataset_layer","foreign_table_show_schema":"dataset_layer","foreign_table_verbose":"dataset_layer (DataSet Layer)","foreign_table_verbose_show_schema":"dataset_layer (DataSet Layer)","foreign_table_object_id":"t3694","primary_table":"dataset_layer.initialization","primary_table_show_schema":"dataset_layer.initialization","primary_table_verbose":"dataset_layer.initialization (Initialization)","primary_table_verbose_show_schema":"dataset_layer.initialization (Initialization)","primary_table_object_id":"t3695","pk_cardinality":"1x","fk_cardinality":"1x","constraints":[{"primary_column_path":null,"primary_column":"Precedence","foreign_column_path":null,"foreign_column":"Initialization"}],"custom_fields":{}}],"unique_keys":[],"triggers":[],"dependencies":null,"imported_at":null};