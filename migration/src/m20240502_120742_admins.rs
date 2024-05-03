use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                table_auto(Admins::Table)
                    .col(pk_auto(Admins::Id))
                    .col(string_null(Admins::Email))
                    .col(string_null(Admins::Name))
                    .col(string_null(Admins::LoginId))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Admins::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
enum Admins {
    Table,
    Id,
    Email,
    Name,
    LoginId,
    
}


