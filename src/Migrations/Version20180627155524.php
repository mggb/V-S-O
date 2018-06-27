<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180627155524 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE planete (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(200) NOT NULL, habitat VARCHAR(200) NOT NULL, population VARCHAR(200) NOT NULL, gravite VARCHAR(100) NOT NULL, luminosite VARCHAR(100) NOT NULL, duree VARCHAR(200) NOT NULL, temperature VARCHAR(200) NOT NULL, climat VARCHAR(100) NOT NULL, techno VARCHAR(255) NOT NULL, environnement VARCHAR(255) NOT NULL, histoire VARCHAR(8000) NOT NULL, image VARCHAR(500) NOT NULL, matricul VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user CHANGE prenom prenom VARCHAR(255) NOT NULL, CHANGE nom nom VARCHAR(200) NOT NULL, CHANGE email email VARCHAR(64) NOT NULL, CHANGE sexe sexe VARCHAR(20) NOT NULL, CHANGE origine origine VARCHAR(50) NOT NULL, CHANGE actuel actuel VARCHAR(50) NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON user (email)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE planete');
        $this->addSql('DROP INDEX UNIQ_8D93D649E7927C74 ON user');
        $this->addSql('ALTER TABLE user CHANGE prenom prenom VARCHAR(150) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE nom nom VARCHAR(150) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE email email VARCHAR(200) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE sexe sexe VARCHAR(10) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE origine origine VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE actuel actuel VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci');
    }
}
