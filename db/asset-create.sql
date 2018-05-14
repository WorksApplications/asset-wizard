CREATE TABLE public.allocations
(
  allocation_id integer NOT NULL,
  asset_id integer,
  emp_id character(50),
  s_date timestamp without time zone,
  e_date timestamp without time zone,
  allocation_date timestamp without time zone,
  CONSTRAINT allocations_pkey PRIMARY KEY (allocation_id)
)

CREATE TABLE public.assets
(
  id integer NOT NULL,
  name character(100),
  brand character(100),
  invoice_date date,
  price numeric(20,9),
  currency character(5),
  invoice_number character(50),
  custom_columns jsonb,
  code character(50),
  CONSTRAINT assets_pkey PRIMARY KEY (id)
)

CREATE TABLE public.assets_custom_cols
(
  asset_id integer NOT NULL,
  col_header character(100) NOT NULL,
  col_value character(100) NOT NULL,
  CONSTRAINT assets_custom_pkey PRIMARY KEY (asset_id, col_header, col_value)
)

CREATE TABLE public.employees
(
  emp_id character(50) NOT NULL,
  name character(100),
  email_id character(100),
  is_employed boolean,
  CONSTRAINT employees_pkey PRIMARY KEY (emp_id)
)
